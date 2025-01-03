import React from "react";
import { Link, Location, useLocation } from "react-router-dom"

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const Navlink: React.FC<NavLinkProps> = ({to, children}) => {
  const location: Location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className="relative group">
      {children}
      <span className={`absolute left-0 -bottom-1 w-0 transition-all duration-300 h-1 bg-black rounded opacity-75 ${isActive ? 'w-full' : 'group-hover:w-full'}`}></span>
    </Link>
  )
}

export default Navlink