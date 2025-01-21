const CssSyntax = () => {
  return (
    <>
      <section className="w-full p-4">
        <h1 className="sm:text-6xl text-5xl">CSS Syntax</h1>
        <hr className="mt-4" />
        <p className="text-lg mt-4">A CSS rule consists of a selector and a declaration block.</p>
        <hr className="mt-4" />
        <main className="mt-4 text-lg w-full">
          <h2 className="text-2xl font-medium">CSS Syntax</h2>
          <img src="https://www.w3schools.com/css/img_selector.gif" className="mt-8"/>
          
          <section className="mt-10 sm:leading-10 leading-7">
          <p>The selector points to the HTML element you want to style.</p>
          <p className="max-sm:mt-2">The declaration block contains one or more declarations separated by semicolons.</p>
          <p className="max-sm:mt-2">Each declaration includes a CSS property name and a value, separated by a colon.</p>
          <p className="max-sm:mt-2">Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.</p>
          </section>
        </main>
      </section>
    </>
  );
};

export default CssSyntax;
