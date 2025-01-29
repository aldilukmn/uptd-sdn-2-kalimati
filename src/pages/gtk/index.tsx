import { useEffect, useState } from "react"
import { DefaultGtkResponse, GtkEntity } from "../../models";
import { DataGtk } from "../../data";
import { firstCapitalizeWord } from "../../libs";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setIsLoading } from "../../redux/action/isLoading";
import { Skeleton } from "@mui/material";

function Gtk() {
  const [gtk, setGtk] = useState<GtkEntity[] | null>(null);
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [isHead, setIsHead] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector((state: RootState) => state.isLoadingReducer.isLoading)
  const headOfSchool = gtk?.find(val => val.status.includes('kepala sekolah'));
  const toggleParagraph = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
    setIsHead(false);
  }
  const toggleHead = () => {
    setIsHead((prev) => !prev)
    setIsOpen(null)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(setIsLoading(true));
        const data: DefaultGtkResponse = await DataGtk.getGtk();
        if (data.status.code === 400) throw new Error();
        const sortedData: GtkEntity[] = data.result?.sort((a, b) => {
          const classA = a.class_gtk;
          const classB = b.class_gtk;
          if (a.status.includes('penjaga')) return 1;
          if (b.status.includes('penjaga')) return -1;

          if (classA < classB) return -1;
          if (classA > classB) return 1;

          return 0;
        }) || [];
        setGtk(sortedData);
      } catch (error) {
        if (error instanceof Error) {
          console.log('Failed to fetch data from server.', error.message)
        }
      } finally {
        dispatch(setIsLoading(false));
      }
    }

    getData();
  }, [dispatch]);
  return (
    <>
      <section>
        <h1 className="font-bold text-2xl text-center mt-10 mb-10">Guru dan Tenaga Kependidikan</h1>
        {
          isLoading ? (
            <Skeleton className="md:w-80 mx-auto py-6 dark:bg-white"/>
          ) : (
            headOfSchool && (
              <div className="mb-5 md:w-80 mx-auto text-white" onClick={toggleHead}>
                <h3 className={`bg-blue text-center tracking-widest font-semibold py-3 rounded-t-md cursor-pointer text-xl transition-all duration-500 ease-in-out ${isHead ? 'rounded-t-md' : 'rounded-md'}`}>{firstCapitalizeWord(headOfSchool.status)}</h3>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out bg-blue-soft flex flex-col items-center ${isHead ? 'max-h-dvh py-5 opacity-100 rounded-b-md' : 'max-h-0 opacity-0'}`}>
                  <img src={headOfSchool.image_url} alt="Kepala Sekolah" width={125} className="rounded-full mx-auto mb-5" />
                  <h4 className="tracking-wide font-semibold">{headOfSchool.name}</h4>
                  <h4>NIP. {headOfSchool.nip}</h4>
                </div>
              </div>
              )
          )
        }
        {
          isLoading ? (
            <Skeleton className="py-40 dark:bg-white"/>
          ) : (
            <div className="text-white grid md:grid-cols-3 lg:grid-cols-4 gap-5">
            {
             gtk?.filter(val => !val.status.includes('kepala sekolah')).map((value, index) => (
               <div key={index}>
                <h3 className={`text-xl tracking-widest font-semibold text-center cursor-pointer py-3 bg-blue transition-all duration-500 ease-in-out ${isOpen === index ? 'rounded-t-md' : 'rounded-md'}`} onClick={() => toggleParagraph(index)}>
                  { value.class_gtk && value.class_gtk.includes('pjok') ? 'Guru PJOK' :
                    value.class_gtk && value.class_gtk.includes('pai') ? 'Guru PAI' :
                    value.class_gtk ? `Guru Kelas ${value.class_gtk}` : 'Penjaga'
                  }
                </h3>
                 <div className={`overflow-hidden transition-all duration-500 ease-in-out bg-blue-soft flex flex-col items-center ${isOpen === index ? 'max-h-dvh py-5 opacity-100 rounded-b-md' : 'max-h-0 opacity-0'}`}>
                   <img src={value.image_url} alt={value.status} width={125} className="rounded-full mb-5"/>
                   <h4 className="text-center font-semibold tracking-wide">
                     {value.name}
                   </h4>
                   <h4>NIP : {value.nip}</h4>
                   {
                     value.status.includes('GURU KELAS') && (
                       <h5>Jumlah Siswa : {(value.total_student?.male ?? 0) + (value.total_student?.female ?? 0)}</h5>
                     )
                   }
                 </div>
               </div>
             ))
            }
           </div>
          )
        }
      </section>
    </>
  )
}

export default Gtk