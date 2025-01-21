import { NavLink } from "react-router"
import logo from "../assets/codemind-logo.png"
import { useState } from "react"
import HamMenu from "./hamburger/HamMenu"

const Navbar = () => {
const [hamNav, setHamNav] = useState(true)
 
  function handleChange(){
    setHamNav(!hamNav)
    
  }
  
  return (
    <>
      <nav className="bg-white p-1 w-full flex sm:justify-around max-sm:justify-between items-center shadow-md">
        <a href="/" className="w-20">
          <img src={logo} alt="logo" className="pl-4 max-sm:w-20"/>
        </a>
        <div className={hamNav ? "hamburger-menu md:hidden mx-5" : "max-sm:hidden"}>
          <h1 className="font-bold text-2xl text-blue-900"
          onClick={handleChange}
          >☰</h1>
        </div>
        <ul className="flex justify-evenly w-full ml-16 max-sm:hidden font-bold text-lg text-blue-900">
          <li className="">
            <NavLink 
            to="/" 
            className="hover:underline underline-offset-4 decoration-2"
            >
              Home
            </NavLink>
          </li>
          <li className=" ">
            <NavLink to="/html-page" className="hover:underline underline-offset-4 decoration-2">HTML</NavLink>
          </li>
          <li className="">
            <NavLink to="/css-page" className="hover:underline underline-offset-4 decoration-2">CSS</NavLink>
          </li>
          <li className="">
            <NavLink to="/js-page" className="hover:underline underline-offset-4 decoration-2">JavaScript</NavLink>
          </li>
          <li className="">
            <NavLink to="/react-page" className="hover:underline underline-offset-4 decoration-2">React</NavLink>
          </li>
        </ul>
      </nav>
      <div 
        className={hamNav ? "hidden" : ""}
      >
        <HamMenu openMenu={handleChange} hamNav={hamNav}/>
      </div>
    </>
  )
}

export default Navbar