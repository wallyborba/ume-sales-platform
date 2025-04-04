
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
      <h2 className="text-lg font-bold mb-4">Seu Desempenho</h2>
      
      <div className="flex gap-4">
        <div className="bg-white rounded-lg p-4 flex-1 shadow-sm">
          <div className="flex items-center mb-2">
            <div className="bg-blue-100 p-2 rounded-full mr-2">
              <Users size={20} className="text-blue-600" />
            </div>
            <span className="text-gray-600 text-sm">Total de Clientes</span>
          </div>
          <div className="text-xl font-bold">{clientCount}</div>
        </div>
        
        <div className="bg-white rounded-lg p-4 flex-1 shadow-sm">
          <div className="flex items-center mb-2">
            <div className="bg-green-100 p-2 rounded-full mr-2">
              <DollarSign size={20} className="text-green-600" />
            </div>
            <span className="text-gray-600 text-sm">Ganhos Mensais</span>
          </div>
          <div className="text-xl font-bold">{formattedEarnings}</div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverview;
