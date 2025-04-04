
import { Settings } from "lucide-react";

interface UserInfoCardProps {
  username: string;
  phone: string;
  store: string;
  address: string;
}

const UserInfoCard = ({ username, phone, store, address }: UserInfoCardProps) => {
  return (
    <div className="bg-u-gray text-white p-4 flex justify-between items-center">
      <div>
        <h2 className="text-lg font-bold">{username}</h2>
        <p className="text-sm opacity-80 mt-1">{phone}</p>
        <p className="text-sm opacity-80">{store} - {address}</p>
      </div>
      <button className="bg-gray-500 p-2 rounded-full">
        <Settings size={20} className="text-white" />
      </button>
    </div>
  );
};

export default UserInfoCard;
