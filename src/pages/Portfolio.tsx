
import TopBar from "@/components/TopBar";
import UserInfoCard from "@/components/UserInfoCard";
import LevelProgressCard from "@/components/LevelProgressCard";
import PortfolioRules from "@/components/PortfolioRules";
import PerformanceOverview from "@/components/PerformanceOverview";
import BottomNavBar from "@/components/BottomNavBar";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col bg-u-light-gray pb-16">
      <TopBar />
      
      <UserInfoCard 
        username="Olá, BIG."
        phone="(81) 9****-3134"
        store="BIG LAR"
        address="AV PIO XII"
      />
      
      <div className="px-4 py-4 flex-1">
        <h1 className="text-xl font-bold mb-4">Carteira de Clientes</h1>
        
        <LevelProgressCard 
          level={3}
          levelName="Engaged Seller"
          progress={65}
          nextLevel={4}
        />
        
        <PortfolioRules />
        
        <PerformanceOverview 
          clientCount={127} 
          earnings={18450}
        />
      </div>
      
      <BottomNavBar />
    </div>
  );
};

export default Portfolio;
