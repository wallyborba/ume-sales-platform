
import { Trophy, ChevronRight } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { 
  ScrollArea 
} from "@/components/ui/scroll-area";
import { useState } from "react";

interface LevelProgressCardProps {
  level: number;
  levelName: string;
  progress: number;
  nextLevel: number;
}

const LevelProgressCard = ({ level, levelName, progress, nextLevel }: LevelProgressCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Translate level name to Brazilian Portuguese
  const translateLevelName = (name: string): string => {
    const translations: Record<string, string> = {
      "Engaged Seller": "Vendedor Engajado",
      "Beginner": "Iniciante",
      "Junior Seller": "Vendedor Júnior",
      "Experienced Seller": "Vendedor Experiente",
      "Senior Seller": "Vendedor Sênior",
      "Expert": "Especialista",
      "Master Seller": "Vendedor Mestre",
      "Elite Seller": "Vendedor Elite",
      "Diamond Seller": "Vendedor Diamante",
      "Legendary Seller": "Vendedor Lendário"
    };
    
    return translations[name] || name;
  };

  return (
    <>
      <div 
        className="bg-white rounded-lg p-3 shadow-sm mb-4 flex items-center justify-between cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="flex-1">
          <div className="flex items-center mb-3">
            <div className="bg-u-yellow p-1.5 rounded-full mr-2">
              <Trophy size={16} className="text-white" />
            </div>
            <div className="font-semibold text-sm">Nível {level}</div>
          </div>
          
          <div className="mb-1">
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

        <div className="pl-3">
          <ChevronRight className="text-gray-400" size={18} />
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
          
          <ScrollArea className="h-[60vh] pr-4">
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
                <h3 className="font-semibold">Seu nível atual: {level} ({translateLevelName(levelName)})</h3>
                <p className="text-sm text-gray-600">
                  Você está {progress}% do caminho para o Nível {nextLevel}.
                  Continue adicionando clientes e aumentando suas vendas para progredir!
                </p>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LevelProgressCard;
