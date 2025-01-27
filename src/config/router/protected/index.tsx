import React from 'react'
import { ProtectedType } from './type'
import { Navigate } from 'react-router-dom'
import { RoleType } from '../../../models';
import { jwtDecode } from 'jwt-decode';

const Protected: React.FC<ProtectedType> = ({children}) => {
  const nameToken: string = 'access_token'
  const getToken: string = localStorage.getItem(nameToken) as string;
  if (!getToken) {
    console.log(getToken)
    return <Navigate to='/login'/>
  }

  const decoded: RoleType = jwtDecode(getToken);
  const userTime: number = Number(decoded.exp) * 1000;
  const currentTime: number = new Date().getTime();
  if (currentTime > userTime) {
    localStorage.removeItem(nameToken);
    return <Navigate to='/login'/>
  }

  return (
    <>
      {children}
    </>
  )
}

export default Protected