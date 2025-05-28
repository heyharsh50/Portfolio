import React from "react";
import mongoDB from "../../public/card.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/E-CART.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "Profile Card",
      description: "A personal card layout with social media icons using HTML and CSS.",
      demo: "https://bespoke-dolphin-4a3b4b.netlify.app",
      code: "https://github.com/heyharsh50/Profile-Card.git",
    },
    {
      id: 2,
      logo: express,
      name: "HealthCare",
      description: "A full-stack appointment booking system for doctors and patients.",
      demo: "https://your-demo-link.com",
      code: "https://your-code-link.com",
    },
    {
      id: 3,
      logo: reactjs,
      name: "E-Cart",
      description: "A simple React-based e-commerce cart with add-to-cart and filter features.",
      demo: "https://your-demo-link.com",
      code: "https://your-code-link.com",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold">Featured Projects</span>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
          {cardItem.map(({ id, logo, name, description, demo, code }) => (
            <div
              key={id}
              className="group border-2 rounded-xl shadow-md p-4 bg-white hover:shadow-blue-400 transition-transform duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center">
                <img
                  src={logo}
                  alt={name}
                  className="w-[120px] h-[120px] p-2 rounded-full border-2 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="mt-4 px-2 text-center">
                <h2 className="font-bold text-xl text-gray-900">{name}</h2>
                <p className="text-gray-600 text-sm mt-2">{description}</p>
              </div>

              <div className="mt-4 px-2 flex justify-center gap-3 flex-wrap">
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-sm transition duration-200">
                    Live Demo
                  </button>
                </a>
                <a href={code} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow-sm transition duration-200">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
