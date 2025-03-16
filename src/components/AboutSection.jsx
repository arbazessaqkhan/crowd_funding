import React, { Suspense, lazy } from "react";
import Solution from './Solution'

export default function AboutSection() {
  return (
    <React.Fragment>
    <section className="bg-teal-100 py-16">
      <div className="max-w-6xl text-center px-8 py-16 mx-auto">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">What is UnityFundX</h2>
        <p className="mt-4 text-xl/8 text-gray-700 from-neutral-300">
          UnityFundX is a platform dedicated to empowering individuals and communities by providing a seamless way to raise and contribute funds for meaningful causes.
          Whether it's for medical assistance, education, disaster relief, or community projects, 
          we believe in the power of collective giving.
        </p>

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
    <Solution />
    </React.Fragment>
    

  );
}
