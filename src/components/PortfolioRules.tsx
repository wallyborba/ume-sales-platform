
import { Info, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const PortfolioRules = () => {
  return (
    <Link to="#">
      <div className="bg-white rounded-lg p-3 shadow-sm mb-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-blue-100 p-1.5 rounded-full mr-2">
            <Info size={16} className="text-blue-600" />
          </div>
          <span className="font-semibold text-sm">Regras da Carteira</span>
        </div>
        <ChevronRight className="text-gray-400" size={16} />
      </div>
    </Link>
  );
};

export default PortfolioRules;
