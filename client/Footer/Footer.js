import React from 'react';
import { Footer } from './Home';
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">123 Street Name, City, State, ZIP</p>
        <p className="mb-4">Phone: (123) 456-7890</p>
        
        {/* Social media icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
