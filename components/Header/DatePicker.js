import { useState } from "react";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRangePicker } from "react-date-range";
import { UsersIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const DatePicker = (props) => {
  const { inputValue } = props;

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestNumber, setGuestNumber] = useState(1);
  const router = useRouter();

  const resetInputHandler = () => {
    props.resetInput();
  };

  const searchHandler = () => {
    console.log("Start search: ", inputValue);
    router.push({
      pathname: "search",
      query: {
        location: inputValue,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guestNumber: guestNumber,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const dateChangeHandler = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  return (
    <div className="flex flex-col col-span-3 mx-auto">
      <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date()}
        onChange={dateChangeHandler}
        rangeColors={["#FD5B61"]}
      />
      <div className="flex items-center border-b mb-4">
        <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>

        <UsersIcon className="h-8" />
        <input
          type="number"
          className="w-8 ml-2 text-lg outline-none"
          value={guestNumber}
          min={1}
          onChange={(e) => setGuestNumber(e.target.value)}
        />
      </div>
      <div className="flex">
        <button onClick={resetInputHandler} className="flex-grow text-gray-600">
          Cancel
        </button>
        <button onClick={searchHandler} className="flex-grow text-red-400">
          Search
        </button>
      </div>
    </div>
  );
};

export default DatePicker;
