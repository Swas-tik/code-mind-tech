

const ReactIntro = () => {
  return (
    <>
      <section className="w-full p-4">
        <h1 className="text-6xl">React Introduction</h1>
        <hr className="mt-4"/>
        <main className="mt-4 p-4 text-lg">
          <h2 className="text-2xl font-medium">What is react?</h2>
          <section className="mt-4 leading-10">
            <p>React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.</p>
            <p>React is a tool for building UI components.</p>  
          </section>
          <hr className="mt-4"/>
          <h2 className="text-2xl font-medium mt-4">How does React work?</h2>
          <section className="mt-4 ">
            <p><strong>React creates a VIRTUAL DOM in memory.</strong></p>
            <p >Instead of manipulating the {`browser's`} DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</p>
          </section>
          <section className="mt-4">
            <p><strong>React only changes what needs to be changed!</strong></p>
            <p>React finds out what changes have been made, and changes only what needs to be changed.</p>
          </section>
        </main>
      </section>
    </>
  )
}

export default ReactIntro