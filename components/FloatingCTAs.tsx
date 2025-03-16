import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FloatingCTAs = () => {
  return (
    <div className="hidden md:flex fixed right-4 top-1/2 transform -translate-y-1/2 flex-col gap-4">
      <a
        href="https://github.com/i-am-sergio"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-accent hover:bg-[#27272c] text-black hover:text-accent p-3 rounded-full shadow-md transition-all duration-300 border-transparent border-2 hover:border-accent"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://linkedin.com/in/sergio-mogollon"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-accent hover:bg-[#27272c] text-black hover:text-accent p-3 rounded-full shadow-md transition-all duration-300 border-transparent border-2 hover:border-accent"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="mailto:sergio15.dev@gmail.com"
        className="bg-accent hover:bg-[#27272c] text-black hover:text-accent p-3 rounded-full shadow-md transition-all duration-300 border-transparent border-2 hover:border-accent"
      >
        <FaEnvelope size={24} />
      </a>
    </div>
  );
};

export default FloatingCTAs;