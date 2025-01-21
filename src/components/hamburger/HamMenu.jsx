import { useState } from "react";
import { NavLink } from "react-router";

const HamMenu = ({openMenu, hamNav}) => {
  const [close, setClose] = useState(true);

  function handleChange() {
    setClose(!close);
    openMenu(!close)
    setClose(!hamNav)
  
  }

 
  return (
    <>
      <div
        className={
          close
            ? "hamburger-container  sm:hidden justify-between bg-white p-4 text-blue-900 flex absolute w-2/3 h-1/2 "
            : "hidden"
        }
        
        >
        <nav>
          <ul className="flex flex-col sm:hidden font-bold space-y-5 text-2xl pl-4 text-blue-900"
          onClick={handleChange}
          >
            <li className="">
              <NavLink
                to="/"
                className="hover:underline underline-offset-4 decoration-2"
              >
                Home
              </NavLink>
            </li>
            <li className=" ">
              <NavLink
                to="/html-page"
                className="hover:underline underline-offset-4 decoration-2"
              >
                HTML
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/css-page"
                className="hover:underline underline-offset-4 decoration-2"
              >
                CSS
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/js-page"
                className="hover:underline underline-offset-4 decoration-2"
              >
                JavaScript
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/react-page"
                className="hover:underline underline-offset-4 decoration-2"
              >
                React
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="hamburger-close">
          <h1
            className="text-xl font-bold cursor-pointer"
            onClick={handleChange}
          >
            ✖
          </h1>
        </div>
      </div>
    </>
  );
};

export default HamMenu;
