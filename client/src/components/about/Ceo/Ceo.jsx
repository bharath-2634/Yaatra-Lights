import React from "react";
import ceoImg from "../../../assets/ceoImg.jpg";
import logo from "../../../assets/yaatra-logo.png";

const Ceo = () => {
    return (
        <section className="mt-8 px-4">
            <h2 className="text-xl md:text-2xl font-extrabold text-center">
                About <br />
                <span className="text-3xl md:text-4xl">Our CEO</span>
            </h2>
            <div className="flex justify-center items-center mt-6 bg-gray-50 py-6">
                <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 flex flex-col items-center gap-6">
                    {/* CEO Image and Info */}
                    <div className="flex flex-col md:flex-row items-center gap-6 w-full">
                        <div className="flex flex-col items-center gap-4">
                            <img
                                src={ceoImg}
                                alt="Yaatra Lights"
                                className="w-40 h-40 md:w-48 md:h-48 rounded-lg object-cover"
                            />
                            <h2 className="text-xl font-bold text-indigo-600">MAADESWARAN P</h2>
                        </div>
                        <div className="flex flex-col gap-4 md:w-2/3 text-center md:text-left">
                            <p className="text-lg font-medium text-gray-700">
                                "When something is important enough, you do it even if the odds are not in your favor."
                            </p>
                            <a
                                href="#"
                                className="text-indigo-600 hover:underline font-medium self-center md:self-start"
                            >
                                More Here
                            </a>
                        </div>
                    </div>

                    {/* CEO Designations */}
                    <div className="flex flex-col md:flex-row justify-around items-center gap-6 w-full">
                        {[1, 2].map((_, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center bg-gray-100 rounded-md p-4 text-gray-700"
                            >
                                <p className="text-sm font-bold uppercase">CEO Of</p>
                                <img
                                    src={logo}
                                    alt="Yaatra Lights"
                                    className="w-24 h-10 object-contain mt-2"
                                />
                                <h3 className="text-lg font-semibold mt-2">Prime Techh Machine Works</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ceo;
