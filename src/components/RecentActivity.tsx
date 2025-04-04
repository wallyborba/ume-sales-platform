
import React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

type ActivityType = "purchase" | "new_client";

interface Activity {
  id: string;
  date: Date;
  type: ActivityType;
  amount?: number;
}

interface RecentActivityProps {
  activities: Activity[];
}

const RecentActivity = ({ activities }: RecentActivityProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const getActivityMessage = (activity: Activity) => {
    switch (activity.type) {
      case "purchase":
        return `Você ganhou ${formatCurrency(activity.amount || 0)} de uma compra de cliente.`;
      case "new_client":
        return "Novo cliente adicionado à sua carteira.";
      default:
        return "";
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-6">Atividade Recente</h2>
      
      <div className="bg-white rounded-lg shadow-sm p-4">
        {activities.length > 0 ? (
          <div className="space-y-6">
            {activities.map((activity) => (
              <div key={activity.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <p className="text-gray-500 text-lg mb-1">
                  {format(activity.date, "dd/MM/yyyy", { locale: ptBR })}
                </p>
                <p className="text-xl text-gray-700">
                  {getActivityMessage(activity)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 py-4 text-center">Nenhuma atividade recente encontrada.</p>
        )}
      </div>
    </div>
  );
};

export default RecentActivity;
