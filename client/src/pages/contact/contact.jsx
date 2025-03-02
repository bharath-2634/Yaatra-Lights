import React, { useState } from "react";
import { IoMdPhonePortrait, IoMdMail } from "react-icons/io";
import { FaYoutube, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";

const ContactUs = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleTextClick = () => {
    navigator.clipboard.writeText("+91 7845425982")
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <section className="bg-white flex flex-col items-center px-4 py-8">
      {/* Contact Info Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-center justify-between">
        {/* Contact Details */}
        <div className="flex flex-col items-start gap-6 w-full md:w-1/2">
          <h6 className="text-blue-500 text-sm tracking-wider">CONTACT ME</h6>
          <h2 className="text-black text-3xl font-bold">How can I help you?</h2>
          <p className="text-gray-600 text-sm">Fill in the form or drop an email ✉️</p>

          <div className="flex items-center gap-4 border border-gray-300 p-4 rounded-md cursor-pointer" onClick={handleTextClick}>
            <IoMdPhonePortrait className="text-blue-500 text-xl" />
            <h3 className="text-sm text-gray-700">+91 7845425982</h3>
          </div>

          <div className="flex items-center gap-4 border border-gray-300 p-4 rounded-md">
            <IoMdMail className="text-blue-500 text-xl" />
            <h3 className="text-sm text-gray-700">bharath2005goo@gmail.com</h3>
          </div>

          <div className="flex items-center gap-4 border border-gray-300 p-4 rounded-md">
            <FaYoutube className="text-red-600 text-xl" />
            <h3 className="text-sm text-gray-700">Yaatra Lights</h3>
          </div>

          <div className="flex gap-4 mt-4 text-gray-600 text-2xl">
            <a href="#" className="hover:text-blue-500"><FaFacebookSquare /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitterSquare /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagramSquare /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedin /></a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg">
          <form className="flex flex-col gap-4">
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Name" />
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Email" />
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Subject" />
            <textarea className="w-full p-3 border border-gray-300 rounded-md resize-none" rows="5" placeholder="Message"></textarea>
            <button className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600">Submit</button>
          </form>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="mt-8 w-full max-w-6xl bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-blue-500 p-3 rounded-full text-white">
            <RiMailSendFill className="text-xl" />
          </div>
          <h3 className="text-black font-semibold">Join the newsletter and read the new posts first</h3>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <input type="text" className="flex-1 w-full md:w-auto p-3 border border-gray-300 rounded-md" placeholder="Email" />
          <button className="w-full md:w-auto bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
