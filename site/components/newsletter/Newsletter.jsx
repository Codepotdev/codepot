import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-gray-100 p-20">
      <h2 className="text-4xl font-bold mb-12">Stay Updated</h2>
      <p className="text-xl mb-8">
        Subscribe to our newsletter for the latest updates on new open-source
        projects, StackOverflow questions, blog posts, and more.
      </p>
      <form className="w-full max-w-lg mx-auto">
        <div className="flex items-center border-b border-gray-300 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="email"
            placeholder="Email"
          />
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold text-xl hover:bg-blue-800 transition-colors"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};

export default Newsletter;
