
import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

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
      
      <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DrawerTrigger asChild>
          <button className="text-u-gray">
            <div className="flex flex-col space-y-1.5">
              <div className="w-6 h-0.5 bg-gray-500"></div>
              <div className="w-6 h-0.5 bg-gray-500"></div>
              <div className="w-6 h-0.5 bg-gray-500"></div>
            </div>
          </button>
        </DrawerTrigger>
        <DrawerContent className="h-full max-h-[100dvh] rounded-none pt-0 px-0">
          <div className="absolute right-4 top-4">
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={24} className="text-gray-500" />
            </button>
          </div>
          
          <div className="flex flex-col items-center pt-8 pb-6">
            <div className="bg-gray-300 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
            </div>
            <h2 className="text-xl font-bold">BIG LAR - PIO XII</h2>
            <p className="text-gray-500 mt-1">(81) 9****-9338</p>
            <p className="text-gray-500 text-sm">BIG LAR - AV PIO XII</p>
          </div>
          
          <div className="border-t border-gray-200">
            <nav>
              <ul className="divide-y divide-gray-200">
                <li>
                  <Link 
                    to="/" 
                    className="flex px-6 py-4 text-black font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Consultar cliente
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/portfolio" 
                    className="flex px-6 py-4 text-black font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Carteira de Clientes
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/settings" 
                    className="flex px-6 py-4 text-black font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Configurações
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/logout" 
                    className="flex px-6 py-4 text-black font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sair
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default TopBar;
