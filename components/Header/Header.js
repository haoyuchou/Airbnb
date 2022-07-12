import HeaderLeft from "./HeaderLeft";
import HeaderMiddle from "./HeaderMiddle";
import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <HeaderLeft />

      {/* middle */}
      <HeaderMiddle />

      {/* right */}
      <HeaderRight />
    </header>
  );
};

export default Header;
