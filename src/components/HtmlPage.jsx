import { NavLink, Outlet } from "react-router";
;

const HtmlPage = () => {
  return (
    <>
      <div  className="flex min-h-svh mt-1 max-sm:flex-col overflow-x-hidden">
        <section className="w-1/4 bg-slate-200 max-sm:w-full">
         <h1 className="text-3xl font-semibold my-6 text-center max-sm:hidden">Html Tutorial</h1>

         <ul className="flex md:flex-col items-center max-sm:p-1 max-sm:text-sm justify-center gap-2 md:gap-4">
          <li>
            <NavLink to=''>HTML Home</NavLink>
          </li>
          <li>
            <NavLink to='basic'>HTML Basic</NavLink> 
          </li>
          <li>
            <NavLink to="element">HTML Element</NavLink>
          </li>
          <li>
            <NavLink to='attributes'>HTML Attributes</NavLink>
          </li>
         </ul>
        </section>
        <Outlet/>
        
      </div>
    </>
  );
};

export default HtmlPage;
