
import TopBar from "@/components/TopBar";
import UserInfoCard from "@/components/UserInfoCard";
import LevelProgressCard from "@/components/LevelProgressCard";
import PortfolioRules from "@/components/PortfolioRules";
import PerformanceOverview from "@/components/PerformanceOverview";
import RecentActivity from "@/components/RecentActivity";
import BottomNavBar from "@/components/BottomNavBar";

const Portfolio = () => {
  // Sample activities data
  const recentActivities = [
    {
      id: "1",
      date: new Date(2025, 3, 2), // April 2, 2025
      type: "purchase" as const,
      amount: 1.23
    },
    {
      id: "2",
      date: new Date(2025, 2, 28), // March 28, 2025
      type: "purchase" as const,
      amount: 5.67
    },
    {
      id: "3",
      date: new Date(2025, 2, 15), // March 15, 2025
      type: "new_client" as const
    },
    {
      id: "4",
      date: new Date(2025, 2, 10), // March 10, 2025
      type: "purchase" as const,
      amount: 8.90
    }
  ];

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
        <h1 className="text-lg font-bold mb-4">Carteira de Clientes</h1>
        
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
        
        <RecentActivity activities={recentActivities} />
      </div>
      
      <BottomNavBar />
    </div>
  );
};

export default Portfolio;
