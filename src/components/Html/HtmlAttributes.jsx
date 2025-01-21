

const HtmlAttributes = () => {
  return (
    <>
      <section className="w-full p-4"> 
        <h1 className="sm:text-6xl text-5xl">HTML Attribute</h1>
        <hr className="mt-4"/>
        <p className="mt-4 text-lg">HTML attributes provide additional information about HTML elements.</p>
        <hr className="mt-4"/>
        <h2 className="mt-4 text-2xl font-medium">HTML attributes</h2>
        <p className="mt-4 text-lg">All HTML elements can have <strong>attributes</strong></p>
        <p className="mt-3 text-lg">Attributes provide <strong>additional information</strong> about elements</p>
        <p className="mt-3 text-lg">Attributes are always specified in <strong>the start tag</strong></p>
        <p className="mt-3 text-lg">Attributes usually come in name/value pairs like<strong>: {`name="value"`}</strong></p>
        <hr className="mt-4"/>
        <h2 className="mt-4 text-xl font-medium">Example</h2>
        <textarea
        name="hrefText"
        defaultValue={`"<a href="https://www.w3schools.com">Visit W3Schools</a>"`}
        rows={1}
        cols={50}
        className="sm:w-1/2 w-4/5 max-sm:h-40 p-4 bg-slate-200 mt-4 border-2 rounded-md"
        readOnly  
        />


      </section>
    </>
  )
}

export default HtmlAttributes