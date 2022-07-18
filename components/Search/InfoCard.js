import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const InfoCard = (props) => {
  const { img, location, title, description, star, price, total } = props;

  return (
    <div className="mb-10 hover:shadow-lg border-b py-3 px-3 rounded-2xl flex cursor-pointer hover:opacity-80 transition duration-150 ease-ou first:border-tt">
      <div className="relative h-24 w-36 md:h-48 md:w-72 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-4">
        <div className="flex justify-between">
          <p className="text-sm text-gray-500">{location}</p>
          <HeartIcon className="h-6 text-gray-500 cursor-pointer" />
        </div>

        <p className="text-lg font-semibold">{title}</p>
        <p className="mt-3 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end">
          <div className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            <h4>{star}</h4>
          </div>

          <div>
            <h4 className="text-lg lg:text-2xl font-semibold">{price}</h4>
            <h4 className="mt-2 text-right text-gray-500">{total}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
