
import { Trophy, ChevronRight } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { useState } from "react";

interface LevelProgressCardProps {
  level: number;
  levelName: string;
  progress: number;
  nextLevel: number;
}

const LevelProgressCard = ({ level, levelName, progress, nextLevel }: LevelProgressCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-white rounded-lg p-3 shadow-sm mb-4 flex flex-col cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
      >
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

        <div className="flex justify-end mt-1">
          <ChevronRight className="text-gray-400" size={16} />
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Sistema de Níveis</DialogTitle>
            <DialogDescription>
              Entenda como funciona nosso sistema de progressão de níveis
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-3">
            <div className="space-y-2">
              <h3 className="font-semibold">Como os níveis funcionam:</h3>
              <p className="text-sm text-gray-600">
                Cada nível representa sua experiência e dedicação como vendedor. 
                À medida que você adquire mais clientes e aumenta suas vendas, 
                seu progresso avança para o próximo nível.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Benefícios de subir de nível:</h3>
              <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                <li>Acesso a produtos exclusivos</li>
                <li>Maiores porcentagens de comissão</li>
                <li>Prioridade no suporte ao vendedor</li>
                <li>Reconhecimento na comunidade</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Seu nível atual: {level} ({levelName})</h3>
              <p className="text-sm text-gray-600">
                Você está {progress}% do caminho para o Nível {nextLevel}.
                Continue adicionando clientes e aumentando suas vendas para progredir!
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LevelProgressCard;
