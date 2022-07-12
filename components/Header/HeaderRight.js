import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

const HeaderRight = () => {
  return (
    <div className="flex space-x-3 items-center justify-end">
      <p className="hidden md:inline cursor-pointer">Become a host</p>
      <GlobeAltIcon className="h-6 cursor-pointer" />
      <div className="flex text-gray-500 items-center space-x-1 border-2 rounded-full p-2">
        <MenuIcon className="h-6" />
        <UserCircleIcon className="h-6" />
      </div>
    </div>
  );
};

export default HeaderRight;
