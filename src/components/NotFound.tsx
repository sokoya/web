import React from "react";

function NotFoundPage() {
  return (
    <section className="bg-white pt-16">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary2 darrk:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-grey-500 md:text-4xl darrk:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 darrk:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <a
            href="#"
            className="inline-flex text-white bg-primary2 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center darrk:focus:ring-primary-900 my-4"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
