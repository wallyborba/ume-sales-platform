
import { User, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNavBar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isPortfolio = location.pathname === "/portfolio";

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 z-50">
      <Link 
        to="/" 
        className={`flex flex-col items-center justify-center w-1/2 py-2 ${isHome ? 'text-u-green' : 'text-u-gray'}`}
      >
        <User size={24} />
        <span className="text-xs mt-1 font-medium">Consult Client</span>
      </Link>
      
      <Link 
        to="/portfolio" 
        className={`flex flex-col items-center justify-center w-1/2 py-2 ${isPortfolio ? 'text-u-green' : 'text-u-gray'}`}
      >
        <Users size={24} />
        <span className="text-xs mt-1 font-medium">Client Portfolio</span>
      </Link>
    </div>
  );
};

export default BottomNavBar;
