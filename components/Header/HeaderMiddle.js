import { Fragment } from "react";
import { SearchIcon } from "@heroicons/react/solid";

const HeaderMiddle = () => {
  return (
    <Fragment>
      <div className="flex items-center md:border-2 rounded-full py-2 
      md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-gray-600"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-1.5 cursor-pointer md:mr-1" />
      </div>
    </Fragment>
  );
};

export default HeaderMiddle;
