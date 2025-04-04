
import TopBar from "@/components/TopBar";
import UserInfoCard from "@/components/UserInfoCard";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col bg-u-light-gray">
      <TopBar />
      
      <UserInfoCard 
        username="Olá, BIG."
        phone="(81) 9****-3134"
        store="BIG LAR"
        address="AV PIO XII"
      />
      
      <div className="px-4 py-4 flex-1">
        <h1 className="text-xl font-bold mb-4">Client Portfolio</h1>
        <p className="text-gray-600">This page will display your client portfolio.</p>
      </div>
    </div>
  );
};

export default Portfolio;
