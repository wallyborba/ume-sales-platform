
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="text-gray-400">
                  <Info size={18} />
                </button>
              </TooltipTrigger>
              <TooltipContent className="bg-white p-2 max-w-xs">
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  );
};

export default MetricCard;
