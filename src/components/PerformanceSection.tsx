
import { useState } from 'react';
import MetricCard from './MetricCard';

type Period = 'today' | 'week' | 'month';

// Mock data for different periods
const mockData = {
  today: {
    clientsRegistered: 2,
    paidSales: 1
  },
  week: {
    clientsRegistered: 8,
    paidSales: 6
  },
  month: {
    clientsRegistered: 32,
    paidSales: 25
  }
};

const PerformanceSection = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('today');
  const currentDate = new Date().toLocaleDateString('pt-BR');
  
  // Get the current data based on selected period
  const currentData = mockData[selectedPeriod];
  
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Seu desempenho</h2>
      
      <div className="flex mb-4 gap-2">
        <button 
          className={`px-4 py-2 rounded-full text-sm ${
            selectedPeriod === 'today' 
              ? 'bg-u-black text-white' 
              : 'bg-white text-gray-700'
          }`}
          onClick={() => setSelectedPeriod('today')}
        >
          Hoje
        </button>
        <button 
          className={`px-4 py-2 rounded-full text-sm ${
            selectedPeriod === 'week' 
              ? 'bg-u-black text-white' 
              : 'bg-white text-gray-700'
          }`}
          onClick={() => setSelectedPeriod('week')}
        >
          Semana
        </button>
        <button 
          className={`px-4 py-2 rounded-full text-sm ${
            selectedPeriod === 'month' 
              ? 'bg-u-black text-white' 
              : 'bg-white text-gray-700'
          }`}
          onClick={() => setSelectedPeriod('month')}
        >
          Mês
        </button>
      </div>
      
      <div className="text-sm text-gray-600 mb-4">{currentDate}</div>
      
      <div className="flex gap-4">
        <MetricCard 
          value={currentData.clientsRegistered} 
          label="Clientes cadastrados" 
          tooltip="Número de novos clientes cadastrados por você neste período. Cadastre mais clientes para aumentar sua carteira."
        />
        <MetricCard 
          value={currentData.paidSales} 
          label="Vendas remuneradas" 
          tooltip="Quantidade de vendas que geraram comissões para você neste período. Mais vendas significam maiores ganhos."
        />
      </div>
    </div>
  );
};

export default PerformanceSection;
