import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* My name */}
        <h1 className="text-2xl font-bold text-blue-600">HIROSHAN <span>MADUSANKA</span></h1>

        {/* Navigation bar Link */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600">
            Projects
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Toggle, when  */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
     
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu when resize. */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600">
              Projects
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
