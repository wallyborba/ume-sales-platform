
import { Info, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const PortfolioRules = () => {
  return (
    <Link to="#">
      <div className="bg-white rounded-lg p-4 shadow-sm mb-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <Info size={24} className="text-blue-600" />
          </div>
          <span className="font-bold text-xl">Regras da Carteira</span>
        </div>
        <ChevronRight className="text-gray-400" size={24} />
      </div>
    </Link>
  );
};

export default PortfolioRules;
