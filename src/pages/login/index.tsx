import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setIsLoading } from "../../redux/action/isLoading";

function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector((state: RootState) => state.isLoadingReducer.isLoading);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    dispatch(setIsLoading(true));
    try {
      e.preventDefault();
      await new Promise((res) => setTimeout(res, 3000))
    } catch (error) {
      console.log('ok', 'loading berhasil')
    } finally {
      dispatch(setIsLoading(false));
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-blue mx-96 mt-20 mb-28 px-10 text-center pt-6 pb-10 rounded-md relative">
        <h4 className="text-white font-semibold tracking-widest">Selamat Datang di UPTD SDN 2 Kalimati</h4>
        <h3 className="text-white font-semibold text-xl tracking-widest">Login sebagai Admin</h3>
        <span className=" w-full bg-white border-b-4 block mt-3 mb-5 rounded-full"></span>
        <label htmlFor="username" className="block text-start mb-2 font-semibold tracking-widest text-white border-b-2 w-fit">Username</label>
        <input placeholder="Username" id="username" name="username" type="text" className="w-full p-2 tracking-widest rounded-md outline-blue-soft mb-5" onChange={handleOnChange} value={username}></input>
        <label htmlFor="password" className="block text-start mb-2 font-semibold tracking-widest text-white border-b-2 w-fit ">Password</label>
        <input placeholder="Password" id="password" name="password" type="password" className="w-full p-2 tracking-widest rounded-md outline-blue-soft mb-8" onChange={handleOnChange} value={password}></input>
        <button className={`w-full py-2 rounded-md tracking-widest font-bold hover:bg-gray-200 ${!username || !password || isLoading ? 'cursor-not-allowed bg-gray-200' : 'bg-white'}`} disabled={!username || !password || isLoading}>{isLoading ? 'Loading ...' : 'Login'}</button>
      </form>
    </>
  )
}

export default Login