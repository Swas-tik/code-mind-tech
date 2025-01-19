import { NavLink } from "react-router"
import logo from "../assets/codemind-logo.png"

const Navbar = () => {
  return (
    <>
      <nav className="bg-white p-1 w-full flex justify-around items-center shadow-md">
        <div className="w-20">
          <img src={logo} alt="logo" className="pl-4"/>
        </div>

        <ul className="flex justify-evenly w-full ml-20">
          <li className="inline-block mx-2">
            <NavLink 
            to="/" 
            className="font-bold text-lg text-blue-900 hover:underline underline-offset-4 decoration-2"
            >
              Home
            </NavLink>
          </li>
          <li className="inline-block mx-2">
            <NavLink to="/html-page" className="font-bold text-lg text-blue-900 hover:underline underline-offset-4 decoration-2">HTML</NavLink>
          </li>
          <li className="inline-block mx-2">
            <NavLink to="/css-page" className="font-bold text-lg text-blue-900 hover:underline underline-offset-4 decoration-2">CSS</NavLink>
          </li>
          <li className="inline-block mx-2">
            <NavLink to="/js-page" className="font-bold text-lg text-blue-900 hover:underline underline-offset-4 decoration-2">JavaScript</NavLink>
          </li>
          <li className="inline-block mx-2">
            <NavLink to="/react-page" className="font-bold text-lg text-blue-900 hover:underline underline-offset-4 decoration-2">React</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar