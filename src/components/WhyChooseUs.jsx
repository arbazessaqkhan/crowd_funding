import { CheckCircleIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function WhyChooseUs(){
    const benefits = [
        {
            title: "Transparent & Secure",
            description: "Every donation is tracked, ensuring complete transparency and security.",
          },
          {
            title: "Zero Hidden Fees",
            description: "Unlike others, we ensure that all contributions go directly to the cause.",
          },
          {
            title: "Fast & Easy Fundraising",
            description: "Create a fundraiser in minutes and start receiving contributions instantly.",
          },
          {
            title: "Global Reach",
            description: "Connect with supporters from around the world to maximize impact.",
          },
    ]

    return (
        <section className="bg-white py-16 px-6">
            <div className="p-16 max-w-6xl mx-auto text-center">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900">
                Why Choose Us?
                </h2>
                <p className="mt-8 text-lg font-medium text-gray-700">
                We make fundraising easy, transparent, and impactful. Here's why thousands trust us.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4 py-10 px-8 bg-gray-100 rounded-lg  shadow-md hover:scale-105 cursor-pointer transition-transform duration-300">
                        <CheckCircleIcon className=" min-w-8 w-8 text-blue-600 sm:w-10" />

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-700">
                                {benefit.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}