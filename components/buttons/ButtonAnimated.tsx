import React, { ReactNode } from 'react';
import Link from 'next/link'; // Importa Link de Next.js

interface ButtonAnimatedProps {
  children: ReactNode;
  href?: string; // Hace que href sea opcional
}

const ButtonAnimated: React.FC<ButtonAnimatedProps> = ({ children, href }) => {
  if (href) {
    // Renderiza un enlace si se proporciona href
    return (
      <Link href={href} className="max-w-40 border-2 bg-accent text-black py-2 px-4 rounded-2xl transition-colors duration-300 ease-in-out hover:bg-[#27272c] hover:text-accent hover:border border-transparent hover:border-accent cursor-pointer">
        {children}
      </Link>
    );
  } else {
    // Renderiza un botón si no se proporciona href
    return (
      <button className="max-w-40 border-2 bg-accent text-black py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out hover:bg-[#27272c] hover:text-accent hover:border border-transparent hover:border-accent cursor-pointer">
        {children}
      </button>
    );
  }
};

export default ButtonAnimated;