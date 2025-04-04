
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const ClientSearchCard = () => {
  const [cpf, setCpf] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for searching client would go here
    console.log("Searching for client with CPF:", cpf);
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-3">Consultar cliente</h2>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Insira o CPF do cliente"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          className="flex-1 border border-gray-300 rounded-l-lg p-3 outline-none"
        />
        <button 
          type="submit"
          className="bg-green-500 text-white p-3 rounded-r-lg"
        >
          <ArrowRight size={20} />
        </button>
      </form>
    </div>
  );
};

export default ClientSearchCard;
