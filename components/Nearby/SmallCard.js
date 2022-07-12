import Image from "next/image";

const SmallCard = (props) => {
  const { img, location, distance } = props;
  return (
    <div className="flex items-center space-x-2 mb-5 hover:scale-105 transition duration-150 ease-out cursor-pointer hover:bg-gray-200">
      <div className="relative h-16 w-16 ">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
