
import { Info } from "lucide-react";

interface MetricCardProps {
  value: number;
  label: string;
}

const MetricCard = ({ value, label }: MetricCardProps) => {
  return (
    <div className="bg-white rounded-lg p-4 flex-1 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-3xl font-bold">{value}</div>
          <div className="text-gray-600 text-sm">{label}</div>
        </div>
        <button className="text-gray-400">
          <Info size={18} />
        </button>
      </div>
    </div>
  );
};

export default MetricCard;
