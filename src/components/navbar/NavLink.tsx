import React from "react";
import { Link } from "react-router-dom"

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const Navlink: React.FC<NavLinkProps> = ({to, children}) => (
  <Link to={to} className="relative group">
    {children}
    <span className="absolute left-0 -bottom-1 w-0 transition-all duration-300 group-hover:w-full h-1 bg-black rounded opacity-75"></span>
  </Link>
)

export default Navlink