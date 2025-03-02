import React from "react";
import AboutUsHeader from "../../components/about/AboutUsHeader/AboutUsHeader";
import WhyYaatra from "../../components/about/whyYaatra/WhyYaatra";
import Mission from "../../components/about/Mission/Mission";
import Service from "../../components/about/Service/Service";
import Ceo from "../../components/about/Ceo/Ceo";
import Faq from "../../components/about/FAQ/FAQ";

const About = () => {
    return (
        <section className="bg-gray-100">
            <AboutUsHeader />
            <div className="py-10 px-4 lg:px-20 space-y-16">
                <WhyYaatra />
                <Mission />
                <Service />
                <Ceo />
                <Faq />
            </div>
        </section>
    );
};

export default About;
