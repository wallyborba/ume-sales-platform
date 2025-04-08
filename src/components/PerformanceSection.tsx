
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
  
  // Get the current data based on selected period
  const currentData = mockData[selectedPeriod];
  
  // Date formatting logic based on selected period
  const getFormattedDateText = () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ...
    
    if (selectedPeriod === 'today') {
      return today.toLocaleDateString('pt-BR');
    } else if (selectedPeriod === 'week') {
      // Calculate the start of this week (Monday)
      const startOfThisWeek = new Date(today);
      const daysFromMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Adjust for Sunday
      startOfThisWeek.setDate(today.getDate() - daysFromMonday);
      
      // Calculate the end of last week (Sunday)
      const endOfLastWeek = new Date(startOfThisWeek);
      endOfLastWeek.setDate(startOfThisWeek.getDate() - 1);
      
      // Calculate the start of last week (Monday)
      const startOfLastWeek = new Date(endOfLastWeek);
      startOfLastWeek.setDate(endOfLastWeek.getDate() - 6);
      
      // Format dates as dd/mm
      const formatDate = (date: Date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        return `${day}/${month}`;
      };
      
      return `${formatDate(startOfThisWeek)} (esta semana) - ${formatDate(startOfLastWeek)} (semana passada)`;
    } else if (selectedPeriod === 'month') {
      // Show current month and year
      const options = { month: 'long', year: 'numeric' } as const;
      return today.toLocaleDateString('pt-BR', options);
    }
    
    return today.toLocaleDateString('pt-BR');
  };
  
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
      
      <div className="text-sm text-gray-600 mb-4">{getFormattedDateText()}</div>
      
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
