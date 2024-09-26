import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto text-center sm:text-left">
        <div className="flex flex-col sm:flex-row justify-between">
          {/* Contact Info Section */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: support@example.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Movie Street, Film City</p>
          </div>

          {/* Social Media Section */}
          <div className="mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-400">
                <FaFacebook />
              </a>
              <a href="#" className="text-blue-300 hover:text-blue-200">
                <FaXTwitter />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-400">
                <FaInstagram />
              </a>
              <a href="#" className="text-red-600 hover:text-blue-500">
                <IoLogoYoutube />
              </a>
            </div>
          </div>

          {/* All Rights Reserved */}
          <div className="mt-6 sm:mt-0">
            <p>&copy; 2024 Review4All. All Rights Reserved..</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
