import Head from "next/head";
import Anywhere from "../components/Anywhere/Anywhere";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Nearby from "../components/Nearby/Neraby";

export default function Home({ data, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Thomas Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />
      <main className="max-w-7xl mx-auto px-6 sm:px-12">
        <Nearby data={data} />
        <Anywhere cardsData={cardsData} />
      </main>

      <Footer />
    </div>
  );
}

// Get Static Props must always be called in a page component
export async function getStaticProps() {
  const response = await fetch("https://links.papareact.com/pyp");
  const data = await response.json();

  const res = await fetch("https://links.papareact.com/zp1");
  const cardsData = await res.json();

  return {
    props: {
      data,
      cardsData,
    },
  };
}
