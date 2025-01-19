import { NavLink, Outlet } from "react-router"


const CssPage = () => {
  return (
    <>
       <div  className="flex h-dvh mt-1">
        <section className="w-1/4 bg-slate-200">
         <h1 className="text-3xl font-semibold my-6 text-center">CSS Tutorial</h1>

         <ul className="flex flex-col items-center justify-center gap-4">
          <li>
            <NavLink to=''>CSS Home</NavLink>
          </li>
          <li>
            <NavLink to='introduction'>CSS Introduction</NavLink> 
          </li>
          <li>
            <NavLink to="syntax">CSS Syntax</NavLink>
          </li>
         </ul>
        </section>
        <Outlet/>
        
      </div>
    </>
  )
}

export default CssPage