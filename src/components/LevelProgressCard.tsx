
import { Trophy } from "lucide-react";

interface LevelProgressCardProps {
  level: number;
  levelName: string;
  progress: number;
  nextLevel: number;
}

const LevelProgressCard = ({ level, levelName, progress, nextLevel }: LevelProgressCardProps) => {
  return (
    <div className="bg-white rounded-lg p-3 shadow-sm mb-4">
      <div className="flex items-center mb-3">
        <div className="bg-u-yellow p-1.5 rounded-full mr-2">
          <Trophy size={16} className="text-white" />
        </div>
        <div className="font-semibold text-sm">Nível {level}</div>
      </div>
      
      <div className="mb-2">
        <div className="flex justify-between text-xs mb-1">
          <span>Progresso</span>
          <span className="text-gray-600">{progress}% para Nível {nextLevel}</span>
        </div>
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-black rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LevelProgressCard;
