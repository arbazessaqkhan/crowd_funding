import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Create a Fundraiser",
      description: "Sign up and create your fundraiser with a compelling story and goal.",
    },
    {
      step: "2",
      title: "Share Your Campaign",
      description: "Spread the word through social media, emails, and personal networks.",
    },
    {
      step: "3",
      title: "Receive Donations",
      description: "Start receiving contributions from generous supporters worldwide.",
    },
    {
      step: "4",
      title: "Make an Impact",
      description: "Withdraw funds and use them to bring real change to your cause.",
    },
  ];

  return (
    <section className="bg-teal-200 py-16 px-6">
    <div className="max-w-6xl text-center px-8 py-16 mx-auto">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">How It Works</h2>
        <p className="mt-4 text-xl/8 text-gray-700 from-neutral-300">
          Our platform is designed to make fundraising simple and effective. Follow these steps to get started.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="p-6 bg-teal-100 rounded-lg shadow-md text-center hover:scale-105 cursor-pointer transition-transform duration-300">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-700 text-teal-100 text-xl font-bold">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="text-gray-700 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
     </div>
    </section>
  );
}
