
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-u-black h-14 flex items-center justify-between px-4">
      <button className="text-white" onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className="text-u-green font-bold text-xl">u.me</div>
      <div className="w-6"></div> {/* Empty div for balance */}

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
