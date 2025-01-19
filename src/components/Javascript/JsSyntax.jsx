

const JsSyntax = () => {
  return (
    <>
      <section className="w-full p-4">
        <h1 className="text-6xl">JavaScript Syntax</h1>
        <hr className="mt-4"/>
        <main className="mt-4 p-4 bg-slate-100 border-2 rounded-xl border-slate-300">
          <p>JavaScript syntax is the set of rules, how JavaScript programs are constructed:</p>
          <textarea name="jsSntax" rows={10} cols={50} readOnly className="mt-4 p-4 w-1/2">
         {`How to create variables:
          var x;
          let y;

How to use variables:
          x = 5;
          y = 6;
          let z = x + y;
          `}
          </textarea>
        </main>
      </section>
    </>
  )
}

export default JsSyntax