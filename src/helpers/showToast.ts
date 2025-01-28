import { toast } from "react-toastify";
import { firstCapitalizeWord } from "../libs";

const showToast = (msg: string, status: 'success' | 'error') => {
  toast[status](firstCapitalizeWord(msg), {
    position: "top-right",
    autoClose: 2000,
    closeButton: false,
    className: 'w-fit sm:top-0 top-5 sm:right-0 right-5 rounded'
  });
}

export default showToast;