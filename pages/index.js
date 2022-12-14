import Head from "next/head";
import FeaturedGuides from "../components/home/featuredGuides";
import TopCryptoNews from "../components/home/featuredNews";

function Home() {
  const titleName = "VolaCrypto.io";

  return (
    <div>
      <Head>
        <title>{titleName}</title>
        <meta name="description" content="TO BE WRITEN" />

        {/* */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="grid grid-flow-row grid-cols-1 auto-rows-auto gap-12">
          <div>
            <TopCryptoNews />
          </div>
          {/* <div> */}
          {/* <FeaturedGuides /> */}
          {/* </div> */}
        </div>
      </main>
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(
//     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin"
//   );

//   const data = await res.json();
//   console.log(data);

//   return { props: { data } };
// }

export default Home;
