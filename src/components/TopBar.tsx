
import { Menu } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-u-black h-14 flex items-center justify-between px-4">
      <button className="text-white">
        <Menu size={24} />
      </button>
      <div className="text-u-green font-bold text-xl">u.me</div>
      <div className="w-6"></div> {/* Empty div for balance */}
    </div>
  );
};

export default TopBar;
