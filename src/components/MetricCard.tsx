
import { Info, Users, DollarSign, ChevronRight } from "lucide-react";

interface MetricCardProps {
  value: number;
  label: string;
  icon?: "users" | "money" | "info";
  onClick?: () => void;
}

const MetricCard = ({ value, label, icon = "info", onClick }: MetricCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "users":
        return <Users size={16} className="text-blue-600" />;
      case "money":
        return <DollarSign size={16} className="text-green-600" />;
      default:
        return <Info size={16} className="text-purple-600" />;
    }
  };

  const getBgColor = () => {
    switch (icon) {
      case "users":
        return "bg-blue-100";
      case "money":
        return "bg-green-100";
      default:
        return "bg-purple-100";
    }
  };

  return (
    <div 
      className="bg-white rounded-lg p-3 shadow-sm flex-1 flex justify-between items-center"
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
      <div className="flex items-center">
        <div className={`${getBgColor()} p-1.5 rounded-full mr-2`}>
          {getIcon()}
        </div>
        <div>
          <div className="text-sm font-medium">{value}</div>
          <div className="text-xs text-gray-600">{label}</div>
        </div>
      </div>
      {onClick && <ChevronRight className="text-gray-400" size={16} />}
    </div>
  );
};

export default MetricCard;
