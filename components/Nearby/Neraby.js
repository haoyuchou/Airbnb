import SmallCard from "./SmallCard";

const Nearby = ({ data }) => {
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold py-5">Explore Nearby</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((airbnb, idx) => {
          return (
            <SmallCard
              key={idx}
              img={airbnb.img}
              location={airbnb.location}
              distance={airbnb.distance}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Nearby;
