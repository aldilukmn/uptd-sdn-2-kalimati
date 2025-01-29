import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setIsLoading } from "../../redux/action/isLoading";
import UserType from "./type";
import LoginUser from "./loginContext";
import { firstCapitalizeWord } from "../../libs";
import { useNavigate } from "react-router-dom";
import { setToastMessage } from "../../redux/action/toast";
import { showToast } from "../../helpers";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector((state: RootState) => state.isLoadingReducer.isLoading);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [seePassword, setSeePassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch(name) {
      case 'username':
        setUsername(value);
      break;
      case 'password':
        setPassword(value);
      break;
    }
  }

  const handleSeePassword = () => {
    setSeePassword(prev => !prev)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    dispatch(setIsLoading(true));
    try {
      e.preventDefault();
      const payload: UserType = {
        username,
        password
      };
      const response = await LoginUser.doLogin(payload);

      if (response.status.code === 400) {
        throw new Error(response.status.message);
      }
      dispatch(setToastMessage(response.status.message));
      const isToken = response.result as string;
      localStorage.setItem('access_token', isToken);
      navigate('/dashboard');
    } catch (e) {
      if (e instanceof Error) {
        showToast(firstCapitalizeWord(e.message), 'error')
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-blue 2xl:mx-[28rem] xl:mx-[23rem] md:mx-[10rem] mt-20 mb-28 px-10 text-center pt-6 pb-10 rounded-md relative">
        <h4 className="text-white font-semibold md:text-lg tracking-widest">Selamat Datang</h4>
        <h3 className="text-white font-semibold md:text-xl tracking-widest">Login sebagai Admin</h3>
        <span className=" w-full bg-white border-b-4 block mt-3 mb-5 rounded-full"></span>
        <label htmlFor="username" className="block text-start mb-2 font-semibold tracking-widest text-white border-b-2 w-fit">Username</label>
        <input placeholder="Username" id="username" name="username" type="text" className="w-full p-2 tracking-widest rounded-md outline-blue-soft mb-5" onChange={handleOnChange} value={username}></input>
        <label htmlFor="password" className="block text-start mb-2 font-semibold tracking-widest text-white border-b-2 w-fit ">Password</label>
        <div className="relative">
          <input placeholder="Password" id="password" name="password" type={`${seePassword ? 'text' : 'password'}`} className="w-full p-2 tracking-widest rounded-md outline-blue-soft mb-8" onChange={handleOnChange} value={password}>
          </input>
          <span onClick={handleSeePassword} className="text-black">
            {
              seePassword ? (
                <RemoveRedEyeIcon className="absolute right-3 top-2 cursor-pointer"/>
              ) : (
                <VisibilityOffIcon className="absolute right-3 top-2 cursor-pointer"/>
              )
            }
          </span>
        </div>
        <button className={`w-full text-black py-2 rounded-md tracking-widest font-bold hover:bg-gray-200 ${!username || !password || isLoading ? 'cursor-not-allowed bg-gray-200' : 'bg-white'}`} disabled={!username || !password || isLoading}>{isLoading ? 'Loading ...' : 'Login'}</button>
      </form>
    </>
  )
}

export default Login