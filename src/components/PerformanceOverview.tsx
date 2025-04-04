
import { Users, DollarSign, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
      <h2 className="text-lg font-bold mb-4">Sua Carteira</h2>
      
      <div className="flex gap-4">
        <div className="bg-white rounded-lg p-4 flex-1 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-3xl font-bold">{clientCount}</div>
              <div className="text-gray-600 text-sm mt-1">Total de Clientes</div>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="text-gray-400">
                    <Info size={18} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Total number of clients in your portfolio</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 flex-1 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-3xl font-bold">{formattedEarnings}</div>
              <div className="text-gray-600 text-sm mt-1">Ganhos Mensais</div>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="text-gray-400">
                    <Info size={18} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Your monthly earnings from all clients</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverview;
