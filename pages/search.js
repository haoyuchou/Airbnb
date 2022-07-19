import { useRouter } from "next/router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { format } from "date-fns";
import InfoCard from "../components/Search/InfoCard";
//import MapBox from "../components/Map/MapBox";
import React from "react";
import dynamic from "next/dynamic";



const Search = ({ data }) => {
  const MapBox = React.useMemo(
    () => dynamic(() => import("../components/Map/MapBox"), {
      loading: () => <p>A Map is Loading</p>,
      ssr: false,
    }),
    []
  );

  const router = useRouter();

  const { location, startDate, endDate, guestNumber } = router.query;

  const formatStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formatStartDate} - ${formatEndDate}`;

  // perhaps use recoil to manage input state
  // airbnb api
  // console.log(data);

  return (
    <div className="">
      <Header />
      <main className="flex">
        <section className="flex-grow pt-12 px-8">
          <p className="text-xs mb-4">
            300+ Stays - {range} for {guestNumber} guests
          </p>
          <h1 className="text-3xl font-semibold mb-4">Stays in {location}</h1>

          <div className="hidden md:inline-flex mb-5 space-x-2 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>

            <p className="button">Type of Place</p>

            <p className="button">Price</p>

            <p className="button">Rooms and Beds</p>

            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {data?.map((item, idx) => {
              return (
                <InfoCard
                  key={idx}
                  img={item.img}
                  location={item.location}
                  title={item.title}
                  description={item.description}
                  star={item.star}
                  price={item.price}
                  total={item.total}
                />
              );
            })}
          </div>
        </section>

        <section className="hidden lg:inline-flex lg:min-w-[550px]">
          <MapBox data={data} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const res = await fetch("https://links.papareact.com/isz");

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
