
const HtmlElement = () => {
  return (
    <>
    <section className="w-full p-4"> 
        <h1 className="text-6xl">HTML Elements</h1>
        <hr className="mt-4"/>
        <p className="mt-4 text-lg">An HTML element is defined by a start tag, some content, and an end tag.</p>
        <p className="text-xl font-medium mt-4"><span className="text-red-900">{`<tagname>`}</span> Content goes here... <span className="text-red-900">{`<tagname/>`}</span></p>
        <hr className="mt-4"/>
        <table className="mt-10 w-1/2 bg-slate-200 ">
          <thead className="w-full border-2 border-slate-300">
          <tr>
            <th>Start tag</th>
              
            <th>Element Content</th>
            
            <th>End tag </th>
          </tr>
          </thead>
         <tbody className="w-full text-center border-2 border-slate-300">
              <tr>
                <td>{`<h1>`}</td>
                <td>My First Heading</td>
                <td>{`</h1>`}</td>
              </tr>
              <tr>
                <td>{`<p>`}</td>
                <td>My first paragraph.</td>
                <td>{`</p>`}</td>
              </tr>
    
         </tbody>
        </table>
    </section>
    </>
  )
}

export default HtmlElement