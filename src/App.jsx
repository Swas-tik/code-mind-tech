import { Route, Routes} from "react-router"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import HtmlPage from "./components/HtmlPage"
import Csspage from "./components/CssPage"
import JavascriptPage from "./components/JavascriptPage"
import ReactPage from "./components/ReactPage"
import HtmlHome from "./components/Html/HtmlHome"
import HtmlBasic from "./components/Html/HtmlBasic"
import HtmlElement from "./components/Html/HtmlElement"
import HtmlAttributes from "./components/Html/HtmlAttributes"
import CssHome from "./components/Css/CssHome"
import CssIntroduction from "./components/Css/CssIntroduction"
import CssSyntax from "./components/Css/CssSyntax"
import JsHome from "./components/Javascript/JsHome"
import JsIntro from "./components/Javascript/JsIntro"
import JsSyntax from "./components/Javascript/JsSyntax"
import ReactHome from "./components/React/ReactHome"
import ReactIntro from "./components/React/ReactIntro"
import ReactStarted from "./components/React/ReactStarted"


const App = () => {
  return (
    <>
    <Navbar/>


    <Routes>
      <Route index element={<Home/>}/>

      <Route path="/html-page" element={<HtmlPage/>}>
        <Route index element={<HtmlHome/>}/>
        <Route path="basic" element={<HtmlBasic/>}/>
        <Route path="element" element={<HtmlElement/>}/>
        <Route path="attributes" element={<HtmlAttributes/>}/>
      </Route>

      <Route path="/css-page" element={<Csspage/>}>
        <Route index element={<CssHome/>}/>
        <Route path="introduction" element={<CssIntroduction/>}/>
        <Route path="syntax" element={<CssSyntax/>}/>
      </Route>

      <Route path="/js-page" element={<JavascriptPage/>}>
        <Route index element={<JsHome/>}/>
        <Route path="introduction" element={<JsIntro/>}/>
        <Route path="syntax" element={<JsSyntax/>} />
      </Route>
      <Route path="/react-page" element={<ReactPage/>}>
        <Route index element={<ReactHome/>} />
        <Route path="intro" element={<ReactIntro/>}/>
        <Route path="get-started" element={<ReactStarted/>} />
      </Route>
    </Routes>

   
    </>
  )
}

export default App