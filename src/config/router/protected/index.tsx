import React from 'react'
import { ProtectedType } from './type'
import { Navigate } from 'react-router-dom'
import { RoleType } from '../../../models';
import { jwtDecode } from 'jwt-decode';

const Protected: React.FC<ProtectedType> = ({children}) => {
  const tokenName: string = 'access_token'
  const getToken: string = localStorage.getItem(tokenName) as string;
  if (!getToken) {
    return <Navigate to='/login'/>
  }

  try {
    const decoded: RoleType = jwtDecode(getToken);
    const userTime: number = Number(decoded.exp) * 1000;
    const currentTime: number = new Date().getTime();
    if (currentTime > userTime) {
      localStorage.clear();
      return <Navigate to='/login'/>
    }
  } catch (e) {
    if (e instanceof Error) {
      console.error("invalid token format", e.message);
      localStorage.removeItem(tokenName);
      return <Navigate to='/login'/>;
    }
  }

  return (
    <>
      {children}
    </>
  )
}

export default Protected