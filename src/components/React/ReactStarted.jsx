
const ReactStarted = () => {
  return (
    <>
      <section className="w-full p-4">
        <h1 className="sm:text-6xl text-5xl">Getting Started</h1>
        <hr className="mt-4"/>
        <main className="mt-4 p-4 text-lg">
          <section className="sm:leading-10">
            <p>To get an overview of what React is, you can write React code directly in HTML.</p>
            <p className="max-sm:mt-1">But in order to use React in production, you <strong>need npm and Node.js installed.</strong></p>
          </section>
          <hr className="mt-4"/>
          <h2 className="text-2xl font-medium mt-4">Setting up a React environment</h2>
          <section className="mt-4 p-4 bg-slate-100 border-2 rounded-xl border-slate-300 sm:leading-10 leading-8 ">
            <p>If you have npx and Node.js installed, you can create a React application by using create-react-app.</p>
            <p>Run this command to create a React application named my-react-app:</p>
            <textarea name="reactCommand" rows={1} cols={50} readOnly className="bg-black text-white rounded-md p-4 sm:pl-4 w-2/3 max-sm:h-20 sm:w-1/2 mt-2">npx create-react-app my-react-app</textarea>
            <p>The create-react-app will set up everything you need to run a React application.</p>
          </section>
        </main>
      </section>
    </>
  )
}

export default ReactStarted