
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
      <h2 className="text-3xl font-bold mb-6">Seu Desempenho</h2>
      
      <div className="flex gap-4">
        <div className="bg-white rounded-lg p-6 flex-1 shadow-sm">
          <div className="flex items-center mb-3">
            <div className="bg-blue-100 p-3 rounded-full mr-3">
              <Users size={24} className="text-blue-600" />
            </div>
            <span className="text-gray-600 text-xl">Total de Clientes</span>
          </div>
          <div className="text-5xl font-bold">{clientCount}</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 flex-1 shadow-sm">
          <div className="flex items-center mb-3">
            <div className="bg-green-100 p-3 rounded-full mr-3">
              <DollarSign size={24} className="text-green-600" />
            </div>
            <span className="text-gray-600 text-xl">Ganhos Mensais</span>
          </div>
          <div className="text-5xl font-bold">{formattedEarnings}</div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverview;
