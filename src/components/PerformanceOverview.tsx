
import { Users, DollarSign } from "lucide-react";

interface PerformanceOverviewProps {
  clientCount: number;
  earnings: number;
}

const PerformanceOverview = ({ clientCount, earnings }: PerformanceOverviewProps) => {
  // Format earnings as Brazilian currency
  const formattedEarnings = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(earnings);

  return (
    <div>
      <h2 className="text-sm font-bold mb-3">Seu Portfólio</h2>
      
      <div className="flex gap-3">
        <div className="bg-white rounded-lg p-3 flex-1 shadow-sm">
          <div className="flex items-center mb-2">
            <div className="bg-blue-100 p-1.5 rounded-full mr-2">
              <Users size={16} className="text-blue-600" />
            </div>
            <span className="text-xs text-gray-600">Total de Clientes</span>
          </div>
          <div className="text-sm font-medium">{clientCount}</div>
        </div>
        
        <div className="bg-white rounded-lg p-3 flex-1 shadow-sm">
          <div className="flex items-center mb-2">
            <div className="bg-green-100 p-1.5 rounded-full mr-2">
              <DollarSign size={16} className="text-green-600" />
            </div>
            <span className="text-xs text-gray-600">Ganhos Mensais</span>
          </div>
          <div className="text-sm font-medium">{formattedEarnings}</div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverview;
