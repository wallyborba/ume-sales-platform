
import { Info } from "lucide-react";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface MetricCardProps {
  value: number;
  label: string;
  tooltip?: string;
}

const MetricCard = ({ value, label, tooltip }: MetricCardProps) => {
  return (
    <div className="bg-white rounded-lg p-4 flex-1 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-3xl font-bold">{value}</div>
          <div className="text-gray-600 text-sm mt-1">{label}</div>
        </div>
        {tooltip && (
          <Popover>
            <PopoverTrigger asChild>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <Info size={18} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="bg-white p-3 max-w-xs shadow-md">
              <p className="text-sm text-gray-700">{tooltip}</p>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
};

export default MetricCard;
