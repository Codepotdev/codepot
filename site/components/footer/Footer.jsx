import React from "react";

const Footer = () => {
  return (
    <footer className="py-12">
      <nav className="flex justify-center items-center space-x-4 text-gray-600">
        <a className="hover:text-gray-800" href="#">
          About Us
        </a>
        <a className="hover:text-gray-800" href="#">
          Contact
        </a>
        <a className="hover:text-gray-800" href="#">
          Terms of Service
        </a>
        <a className="hover:text-gray-800" href="#">
          Privacy Policy
        </a>
      </nav>
      <div className="flex justify-center mt-4">
        <a
          className="text-blue-600 hover:text-blue-800 mx-2"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          className="text-blue-600 hover:text-blue-800 mx-2"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="text-blue-600 hover:text-blue-800 mx-2"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          className="text-blue-600 hover:text-blue-800 mx-2"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
