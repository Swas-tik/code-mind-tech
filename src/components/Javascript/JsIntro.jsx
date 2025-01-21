

const JsIntro = () => {
  return (
    <>
      <section className="w-full p-4">
        <h1 className="sm:text-6xl text-5xl">JavaScript Introduction</h1>
        <hr className="mt-4"/>
        <main className="mt-4 p-4 text-lg">
          <h2 className="text-2xl font-medium">What is Javascript?</h2>
          <section className="mt-4 p-4 bg-slate-100 border-2 rounded-xl border-slate-300 sm:leading-10 leading-7">
            <p>JavaScript is the programming language of the web.</p>
            <p className="max-sm:mt-2">It can update and change both HTML and CSS.</p>
            <p className="max-sm:mt-2">It can calculate, manipulate and validate data.</p>
          </section>
          <h2 className="text-2xl font-medium mt-8">Why study Javascript?</h2>
          <section className="mt-4 p-4 bg-slate-100 border-2 rounded-xl border-slate-300 sm:leading-10 leading-7">
            <p>JavaScript is one of the <strong>3 languages</strong> all web developers must learn:</p>
            <p  className="max-sm:mt-2"><strong>HTML</strong> to define the content of web pages</p>
            <p  className="max-sm:mt-2"><strong>CSS</strong> to specify the layout of web pages</p>
            <p  className="max-sm:mt-2"><strong>JavaScript</strong> to program the behavior of web pages</p>
          </section>
        </main>
      </section>
    </>
  )
}

export default JsIntro