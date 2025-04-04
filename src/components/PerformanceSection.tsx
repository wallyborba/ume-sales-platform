
import { useState } from 'react';
import MetricCard from './MetricCard';

type Period = 'today' | 'week' | 'month';

const PerformanceSection = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('today');
  const currentDate = new Date().toLocaleDateString('pt-BR');
  
  return (
    <div className="py-4">
      <h2 className="text-sm font-bold mb-3">Seu desempenho</h2>
      
      <div className="flex mb-3 gap-2">
        <button 
          className={`px-3 py-1.5 rounded-full text-xs ${
            selectedPeriod === 'today' 
              ? 'bg-u-black text-white' 
              : 'bg-white text-gray-700'
          }`}
          onClick={() => setSelectedPeriod('today')}
        >
          Hoje
        </button>
        <button 
          className={`px-3 py-1.5 rounded-full text-xs ${
            selectedPeriod === 'week' 
              ? 'bg-u-black text-white' 
              : 'bg-white text-gray-700'
          }`}
          onClick={() => setSelectedPeriod('week')}
        >
          Semana
        </button>
        <button 
          className={`px-3 py-1.5 rounded-full text-xs ${
            selectedPeriod === 'month' 
              ? 'bg-u-black text-white' 
              : 'bg-white text-gray-700'
          }`}
          onClick={() => setSelectedPeriod('month')}
        >
          Mês
        </button>
      </div>
      
      <div className="text-xs text-gray-600 mb-3">{currentDate}</div>
      
      <div className="flex gap-3">
        <MetricCard value={0} label="Clientes cadastrados" icon="users" onClick={() => console.log('Clicked clients')} />
        <MetricCard value={0} label="Vendas remuneradas" icon="money" onClick={() => console.log('Clicked sales')} />
      </div>
    </div>
  );
};

export default PerformanceSection;
