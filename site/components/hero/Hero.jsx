import React from "react";

const Hero = () => {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold">Accelerate Your Developer Career</h1>
      <p className="text-2xl mt-4 mb-8">
        Discover open-source projects, answer StackOverflow questions, and stay
        up-to-date with the latest dev-related blogs.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-xl hover:bg-blue-800 transition-colors">
        Join Now for Free
      </button>
    </section>
  );
};

export default Hero;
