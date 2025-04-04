
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";

const ClientSearchCard = () => {
  const [cpf, setCpf] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for searching client would go here
    console.log("Searching for client with CPF:", cpf);
  };

  return (
    <div className="mb-4">
      <div className="flex items-center mb-3">
        <div className="bg-purple-100 p-1.5 rounded-full mr-2">
          <Search size={16} className="text-purple-600" />
        </div>
        <h2 className="text-sm font-bold">Consultar cliente</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Insira o CPF do cliente"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          className="flex-1 border border-gray-300 rounded-l-lg p-2.5 text-sm outline-none"
        />
        <button 
          type="submit"
          className="bg-green-500 text-white p-2.5 rounded-r-lg"
        >
          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
};

export default ClientSearchCard;
