import { NavLink, Outlet } from "react-router";
;

const HtmlPage = () => {
  return (
    <>
      <div  className="flex h-dvh mt-1">
        <section className="w-1/4 bg-slate-200">
         <h1 className="text-3xl font-semibold my-6 text-center">Html Tutorial</h1>

         <ul className="flex flex-col items-center justify-center gap-4">
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
