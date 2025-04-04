
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#F3F7FA] h-14 flex items-center justify-between px-4 border-b border-[#C4D0D8]">
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/8fcc03ba-ba88-462b-b5ac-7414cdbeea24.png" 
          alt="u.me logo" 
          className="h-8"
        />
      </div>
      
      <button className="text-u-gray" onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : (
          <div className="flex flex-col space-y-1.5">
            <div className="w-6 h-0.5 bg-gray-500"></div>
            <div className="w-6 h-0.5 bg-gray-500"></div>
            <div className="w-6 h-0.5 bg-gray-500"></div>
          </div>
        )}
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-14 z-50 bg-u-black bg-opacity-95">
          <nav className="p-4">
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="block text-white border-l-4 border-u-green pl-4 py-2 font-medium"
                  onClick={toggleMenu}
                >
                  Consultar Cliente
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className="block text-gray-300 hover:text-white pl-4 py-2 font-medium"
                  onClick={toggleMenu}
                >
                  Carteira de Clientes
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default TopBar;
