import Image from "next/image";

const HeaderLeft = () => {
  return (
    <div className="h-10 flex items-center relative cursor-pointer">
      <Image
        src="https://links.papareact.com/qd3"
        layout="fill"
        objectFit="contain"
        objectPosition="left"
        alt=""
      />
    </div>
  );
};

export default HeaderLeft;
