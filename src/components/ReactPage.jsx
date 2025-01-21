import { NavLink, Outlet } from "react-router"


const ReactPage = () => {
  return (
    <>
       <div  className="flex min-h-svh mt-1 max-sm:flex-col overflow-x-hidden">
        <section className="w-1/4 bg-slate-200 max-sm:w-full">
         <h1 className="text-3xl font-semibold my-6 text-center max-sm:hidden">React Tutorial</h1>

         <ul className="flex md:flex-col items-center max-sm:p-1 max-sm:text-sm justify-center gap-2 md:gap-4">
          <li>
            <NavLink to=''>React Home</NavLink>
          </li>
          <li>
            <NavLink to='intro'>React Intro</NavLink> 
          </li>
          <li>
            <NavLink to="get-started">React Get Started</NavLink>
          </li>
         </ul>
        </section>
        <Outlet/>
        
      </div>
    </>
  )
}

export default ReactPage