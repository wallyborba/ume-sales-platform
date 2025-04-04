
import TopBar from "@/components/TopBar";
import UserInfoCard from "@/components/UserInfoCard";
import ClientSearchCard from "@/components/ClientSearchCard";
import PerformanceSection from "@/components/PerformanceSection";
import BottomNavBar from "@/components/BottomNavBar";

const Index = () => {
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
        <ClientSearchCard />
        <PerformanceSection />
      </div>
      
      <BottomNavBar />
    </div>
  );
};

export default Index;
