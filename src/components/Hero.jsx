
import React from "react";

// Ensure hero.jpg exists in src/assets/
const heroImage = "../assets/hero.jpg";

const HeroWithText = () => {

  return (
    <section className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { e.target.src = "https://via.placeholder.com/1200x600"; }} // Fallback if hero.jpg is missing
      />
      <div className="relative z-10 text-white text-center px-4">
        {/* <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          TalkLMS: Revolutionizing Education
        </h1> */}
        {/* <p className="mt-4 text-lg md:text-2xl drop-shadow-md max-w-2xl mx-auto">
          Empower your institution with a cutting-edge Learning Management System designed for universities, colleges, and institutions. TalkLMS offers a seamless, innovative platform to enhance teaching and learning.
        </p> */}
        {/* <button
          className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          onClick={(e) => handleScroll(e, "key-benefits")}
        >
          Get Started
        </button> */}
      </div>
    </section>
  );
};

export default HeroWithText;
