import React from "react";
import nobleCause from "../assets/nobleCause.jpg"
import proudToDonate1 from "../assets/proudToDonate1.jpg"
import proudToDonate2 from "../assets/proudToDonate2.jpg"
import proudToDonate3 from "../assets/proudToDonate3.jpg"

export default function Solution() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center px-16 py-16">
        <h2 className="text-4xl font-bold text-gray-900">Let's work together for the solution!</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 mt-8">
          <div className="flex flex-col items-center text-center">
            <img src={nobleCause} alt="Noble Cause" className="w-full h-64 object-cover rounded-lg shadow-md"/>
            <p className="mt-4 text-lg font-medium text-gray-700">
            Donate Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa voluptates architecto magnam enim eaque id quae, aut dolorum sed!
            </p>
          </div>
          <div>
            <img src={proudToDonate1} alt="Noble Cause" className="w-full h-64 object-cover rounded-lg shadow-md grayscale"/>
            <p className="mt-4 text-lg font-medium text-gray-700">
            Donate Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa voluptates architecto magnam enim eaque id quae, aut dolorum sed!
            </p>
          </div>
          <div>
            <img src={proudToDonate3} alt="Noble Cause" className="w-full h-64 object-cover rounded-lg shadow-md"/>
            <p className="mt-4 text-lg font-medium text-gray-700">
            Donate Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa voluptates architecto magnam enim eaque id quae, aut dolorum sed!
            </p>
          </div>
          <div>
            <img src={proudToDonate2} className="w-full h-64  object-cover grayscale rounded-lg shadow-md"/>
            <p className="mt-4 text-lg font-medium text-gray-700">
            Donate Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa voluptates architecto magnam enim eaque id quae, aut dolorum sed!
            </p>
          </div>
        </div>
       
        {/* <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="/about" 
            className="rounded-md border-2 border-blue-600 px-6 py-2 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
          >
            Learn More
          </a>
          <a 
            href="/impact" 
            className="rounded-md bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-white hover:text-blue-600 border-2 border-blue-600"
          >
            See How We Help
          </a>
        </div> */}
      </div>
    </section>
  );
}
