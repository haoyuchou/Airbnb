import MediumCard from "./MediumCard";

const Anywhere = ({ cardsData }) => {
  
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold py-5">Live Anywhere</h2>
      <div className="flex space-x-4 overflow-scroll scrollbar-hide pb-10">
        {cardsData?.map((item, idx) => {
          return <MediumCard key={idx} img={item.img} title={item.title} />;
        })}
      </div>
    </section>
  );
};

export default Anywhere;
