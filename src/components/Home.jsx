import { NavLink } from "react-router"


const Home = () => {
  return (
    <>
      <div className="w-full h-full mt-1 bg-gradient-to-b from-indigo-950 from-60% to-indigo-800 flex flex-col">
        <section className="p-4 w-full flex">
          <section className="p-4 w-full">
            <h1 className="text-5xl font-bold text-white font-sans leading-normal">Internship Programs and Development</h1>
            <p className="mt-16 text-white text-lg">The only organization that offers <strong className="text-indigo-500">internship</strong> training and <strong className="text-indigo-500">development</strong> with 100% placement assistance in top, in-demand skills and live projects.</p>
          </section>
          <section className="sm:p-4  sm:w-full  max-sm:hidden">
            <div className="w-80 h-auto border-2 rounded-2xl bg-white shadow-xl text-indigo-950 p-4">
              <div>
                  <h1 className="font-bold">kalyani yadav</h1>
                  <p className="text-xs">@Software Testing</p>
              </div>
              <div className="pt-4">
                <p>CodeMind Technology is an excellent institute, with less fees they provide such good courses thats helps us getting our dream job in desired field...the way teacher explaining each concepts with real time examples in an easy manner helped me to learn and gain confidence in testing and the support they provide is really appreciated. thank you Chandan Sir for all your support. #codemindTechnology#bestteacher .</p>
              </div>
            </div>
          </section>
        </section>
        <section className="mt-16 p-4 flex max-sm:flex-wrap w-full justify-between items-center gap-3">
        <NavLink to="/html-page" className="border-2 rounded-md p-4 w-full bg-gradient-to-r from-indigo-950 from-50% to-indigo-800" >      
            <h1 className="font-semibold text-xl text-white text-center">HTML</h1>
        </NavLink>  
        <NavLink to="/css-page" className="border-2 rounded-md p-4 w-full bg-gradient-to-r from-indigo-950 from-50% to-indigo-800" >
            <h1 className="font-semibold text-xl text-white text-center">CSS</h1>
        </NavLink>

          <NavLink to="/js-page" className="border-2 rounded-md p-4 w-full bg-gradient-to-r from-indigo-950 from-50% to-indigo-800" >
            <h1 className="font-semibold text-xl text-white text-center">JavaScript</h1>
          </NavLink>
          <NavLink to="/react-page" className="border-2 rounded-md p-4 w-full bg-gradient-to-r from-indigo-950 from-50% to-indigo-800" >
            <h1 className="font-semibold text-xl text-white text-center">React</h1>
          </NavLink>
          
        </section>

      </div>
     
    </>
  )
}

export default Home