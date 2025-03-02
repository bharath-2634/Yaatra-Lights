import React, { useState } from "react";
import faq_img from "../../../assets/faq_img.png";

const Faq = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        setSelected(selected === i ? null : i);
    };

    const FaqData = [
        {
            question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aspernatur.",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aspernatur.",
        },
        {
            question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aspernatur.",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aspernatur.",
        },
        // Add more FAQ entries as needed
    ];

    return (
        <section className="bg-indigo-600 text-white py-12 px-4">
            {/* Intro Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
                <div className="flex flex-col items-center lg:items-start lg:w-1/2">
                    <img
                        src={faq_img}
                        alt="FAQ"
                        className="w-2/3 md:w-1/2 lg:w-2/3 mx-auto lg:mx-0"
                    />
                    <p className="text-center lg:text-left text-lg mt-4">
                        Have Questions? Here you'll find the answers most valued by our partners,
                        along with access to step-by-step instructions and support.
                    </p>
                </div>

                {/* FAQ Section */}
                <div className="lg:w-1/2 w-full">
                    {FaqData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white text-gray-800 rounded-lg mb-4 shadow-lg overflow-hidden"
                        >
                            <div
                                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
                                onClick={() => toggle(index)}
                            >
                                <h2 className="text-lg font-semibold">{item.question}</h2>
                                <span className="text-xl">{selected === index ? "-" : "+"}</span>
                            </div>
                            <div
                                className={`${
                                    selected === index ? "max-h-screen" : "max-h-0"
                                } overflow-hidden transition-all duration-300`}
                            >
                                <p className="p-4 text-gray-700">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
