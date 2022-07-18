import { useState } from "react";
import DatePicker from "./DatePicker";
import HeaderLeft from "./HeaderLeft";
import HeaderMiddle from "./HeaderMiddle";
import HeaderRight from "./HeaderRight";

//import "react-date-range/dist/styles.css"; // main style file
//import "react-date-range/dist/theme/default.css"; // theme css file

//import { DateRangePicker } from "react-date-range";
//import { UsersIcon } from "@heroicons/react/solid";

const Header = () => {
  const [inputValue, setInputValue] = useState("");

  console.log(inputValue);
  const resetInputHandler = () => {
    setInputValue("");
  };
  /*(const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const dateChangeHandler = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };*/

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <HeaderLeft />

      {/* middle */}
      <HeaderMiddle setValue={setInputValue} inputValue={inputValue} />

      {/* right */}
      <HeaderRight />

      {inputValue && (
        <DatePicker resetInput={resetInputHandler} inputValue={inputValue} />
      )}
    </header>
  );
};

export default Header;
