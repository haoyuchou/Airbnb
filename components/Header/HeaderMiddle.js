import { Fragment } from "react";
import { SearchIcon } from "@heroicons/react/solid";
//import { useRouter } from "next/router";
//import { format } from "date-fns";

const HeaderMiddle = (props) => {
  /*const router = useRouter();

  const { location, startDate, endDate, guestNumber } = router.query;

  const formatStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formatStartDate} - ${formatEndDate}`;

  const placeholder = `${location} | ${range} | ${guestNumber} guests`;*/

  // console.log(inputValue);

  const inputHandler = (e) => {
    //setInputValue(e.target.value);
    props.setValue(e.target.value);
  };

  return (
    <Fragment>
      <div
        className="flex items-center md:border-2 rounded-full py-2 
      md:shadow-sm"
      >
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-gray-600"
          type="text"
          placeholder="Start your search"
          onChange={inputHandler}
          value={props.inputValue}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-1.5 cursor-pointer md:mr-1" />
      </div>
    </Fragment>
  );
};

export default HeaderMiddle;
