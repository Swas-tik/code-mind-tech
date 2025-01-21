const HtmlHome = () => {
  return (
    <>
      <section className="w-full p-4">
        <h1 className="sm:text-6xl text-5xl">HTML Tutorial</h1>
        <hr className="mt-4"/>
        <main className="mt-16 bg-slate-100 w-full p-4 border-2 rounded-xl border-slate-300">
          <p className="text-lg mt-3 ">
            HTML is the standard markup language for creating Web pages.
          </p>
          <p className="text-lg mt-3 ">
            HTML stands for Hyper Text Markup Language
          </p>
          <p className="text-lg mt-3 ">
            HTML describes the structure of Web pages using markup
          </p>
          <p className="text-lg mt-3 ">
            HTML elements are the building blocks of HTML pages
          </p>
          <p className="text-lg mt-3 ">HTML elements are represented by tags</p>
          <p className="text-lg mt-3 ">
            HTML tags label pieces of content such as {"heading"}, {"paragraph"}
            , {"table"}, and so on
          </p>
          <p className="text-lg mt-3 ">
            Browsers do not display the HTML tags, but use them to render the
            content of the page
          </p>
        </main>
      </section>
    </>
  );
};

export default HtmlHome;
