const HtmlBasic = () => {
  return (
    <>
      <section className="w-full p-4">
        <h1 className="text-6xl">HTML Basic Example</h1>
        <hr className="mt-4" />
        <p className="text-lg mt-4">
          In the chapter we will learn some basic HTML examples.{" "}
        </p>
        <h2 className="text-2xl font-medium mt-4 ">HTML Documents</h2>
        <hr className="mt-4" />
        <p className="text-lg mt-4">
          All HTML documents must start with a document type declaration:{" "}
          {`<!DOCTYPE html>`}.
        </p>
        <p className="text-lg mt-4">
          The HTML document itself begins with {`<html>`} and ends with{" "}
          {`</html>`}.
        </p>
        <p className="text-lg mt-4">
          The visible part of the HTML document is between {`<body>`} and{" "}
          {`</body>`}.
        </p>

        <textarea
          name="htmlCode"
          readOnly
          defaultValue="<!DOCTYPE html>
          <html>
          <body>

          <h1>My First Heading</h1>
          <p>My first paragraph.</p>

          </body>
          </html>"
          rows={9}
          cols={70}
          className="bg-slate-200 p-4 border-2 rounded-md mt-4"
        />
      </section>
    </>
  );
};

export default HtmlBasic;
