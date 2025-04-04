
import TopBar from "@/components/TopBar";
import UserInfoCard from "@/components/UserInfoCard";
import ClientSearchCard from "@/components/ClientSearchCard";
import PerformanceSection from "@/components/PerformanceSection";
import BottomNavBar from "@/components/BottomNavBar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F3F7FA] pb-16">
      <TopBar />
      
      <UserInfoCard 
        username="Olá, BIG."
        phone="(81) 9****-3134"
        store="BIG LAR"
        address="AV PIO XII"
      />
      
      <div className="bg-white px-4 py-4">
        <ClientSearchCard />
      </div>
      
      <div className="bg-[#F3F7FA] px-4 py-4 flex-1">
        <PerformanceSection />
      </div>
      
      <BottomNavBar />
    </div>
  );
};

export default Index;
