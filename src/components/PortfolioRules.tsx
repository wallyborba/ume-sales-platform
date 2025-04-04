
import { Info, ChevronRight } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const PortfolioRules = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-white rounded-lg p-3 shadow-sm mb-4 flex justify-between items-center cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="flex items-center">
          <div className="bg-blue-100 p-1.5 rounded-full mr-2">
            <Info size={16} className="text-blue-600" />
          </div>
          <span className="font-semibold text-sm">Regras da Carteira</span>
        </div>
        <ChevronRight className="text-gray-400" size={16} />
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            {/* Removed DialogTitle and DialogDescription as requested */}
          </DialogHeader>
          
          <ScrollArea className="max-h-[70vh]">
            <div className="space-y-4 py-3 pr-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Como funciona sua carteira:</h3>
                <p className="text-sm text-gray-600">
                  Sua carteira é composta por todos os clientes que você cadastrou no sistema. Quanto mais 
                  clientes ativos você tiver, maiores serão suas chances de aumentar seu faturamento mensal.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Como ganhar com sua carteira:</h3>
                <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                  <li>Cadastre novos clientes regularmente</li>
                  <li>Mantenha contato com seus clientes para aumentar as vendas</li>
                  <li>Receba comissões sobre cada venda realizada</li>
                  <li>Desbloqueie benefícios adicionais ao subir de nível</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Comissões e Pagamentos:</h3>
                <p className="text-sm text-gray-600">
                  Suas comissões são calculadas automaticamente com base no volume de vendas. 
                  Os pagamentos são processados mensalmente e você pode acompanhar seu desempenho 
                  atual através do seu painel.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Dicas para aumentar seus ganhos:</h3>
                <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                  <li>Ofereça produtos complementares aos seus clientes</li>
                  <li>Acompanhe as promoções e ofertas especiais</li>
                  <li>Faça o acompanhamento pós-venda para fidelizar clientes</li>
                  <li>Participe dos treinamentos para melhorar suas técnicas de venda</li>
                </ul>
              </div>
            </div>
          </ScrollArea>
          
          <div className="mt-5 flex justify-end">
            <Button 
              onClick={() => setIsDialogOpen(false)}
              className="bg-black hover:bg-gray-800"
            >
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PortfolioRules;
