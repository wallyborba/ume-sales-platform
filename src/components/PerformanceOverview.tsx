
import { Users, DollarSign, Info } from "lucide-react";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
            <Popover>
              <PopoverTrigger asChild>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Info size={18} />
                </button>
              </PopoverTrigger>
              <PopoverContent className="bg-white p-3 max-w-xs shadow-md">
                <p className="text-sm text-gray-700">Este é o número total de clientes em sua carteira. Quanto mais clientes ativos, maiores suas oportunidades de ganhos.</p>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 flex-1 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-3xl font-bold">{formattedEarnings}</div>
              <div className="text-gray-600 text-sm mt-1">Ganhos Mensais</div>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Info size={18} />
                </button>
              </PopoverTrigger>
              <PopoverContent className="bg-white p-3 max-w-xs shadow-md">
                <p className="text-sm text-gray-700">Este valor representa suas comissões mensais baseadas nas vendas realizadas para clientes da sua carteira. Acompanhe este indicador para medir seu desempenho.</p>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverview;
