import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Designed and Developed Section */}
          <div className="mb-6 md:mb-0 text-center">
            <h3 className="text-md font-semibold">
              Based on work of&nbsp;&nbsp;
              <a className="text-scrollbar-thumb" href="https://soumyajit.vercel.app/">
                Soumyajit Behera
              </a>
              &nbsp;rewritten by&nbsp;
              <span className="text-scrollbar-thumb">Avi E Koenig</span>
            </h3>
          </div>

          {/* Copyright Section */}
          <div className="mb-6 md:mb-0 text-center">
            <h3 className="text-lg font-semibold">CoffeRights <span className="text-scrollbar-thumb">©{year}</span>&nbsp;Avi E Koenig</h3>
          </div>

          {/* Social Icons Section */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Darkmift"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-500 transition"
            >
              <AiFillGithub size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/avi-koenig/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-500 transition"
            >
              <FaLinkedinIn size={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
