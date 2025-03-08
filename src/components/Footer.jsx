import React from "react";
import { BiPhone } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-5 p-8 lg:p-20 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h3 className="text-3xl font-semibold mb-4">About</h3>
          <p className="text-base">
          I am a professional security bouncer with experience in maintaining safety and order at various venues. My role involves crowd control, conflict resolution, and ensuring a secure environment for guests and staff. I have strong observational skills, quick decision-making abilities, and a calm yet assertive approach to handling challenging situations. My priority is to create a safe and enjoyable experience for everyone while enforcing security protocols effectively.
          </p>
        </div>
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:ml-16">
          <h3 className="text-3xl font-semibold mb-6">Contact Info</h3>
          <p className="text-base flex items-center">
            <MdLocationOn className="mr-1 text-2xl " /> Budh Bazar Pooja Colony Loni Gzb
          </p>
          <p className="text-base mt-4 flex items-center">
            <MdEmail className="mr-2 text-xl" /> manishyadav881024@gmail.com
          </p>
          <p className="text-base mt-4 flex items-center">
            <BiPhone className="mr-2 text-xl" /> +91 8810422460, +91 8287021679
          </p>
        </div>
        <div className="w-full  lg:w-1/3 lg:ml-10">
          <h3 className="text-3xl font-semibold mb-6">Stay Connected</h3>
         
          <div className="flex gap-5" >
          <a href="https://bg.ibelick.com/" target="_blank" rel="noreferrer"  ><FaInstagram className="text-3xl cursor-pointer " /></a>
          
          <FaFacebook className="text-3xl cursor-pointer "  />

          <FaYoutube className="text-4xl -mt-1 cursor-pointer" />

          <FaTwitter className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 lg:mt-20 pt-4 text-center">
        <p>Made by Arjun with ❤️ in India </p>
      </div>
    </footer>
  );
};

export default Footer;
