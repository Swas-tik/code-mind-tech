import { NavLink, Outlet } from "react-router"


const ReactPage = () => {
  return (
    <>
       <div  className="flex h-dvh mt-1">
        <section className="w-1/4 bg-slate-200">
         <h1 className="text-3xl font-semibold my-6 text-center">React Tutorial</h1>

         <ul className="flex flex-col items-center justify-center gap-4">
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