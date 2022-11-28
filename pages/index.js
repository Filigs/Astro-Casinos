import Head from "next/head";
import TopCryptoNews from "../components/home/featuredNews";
const titleName = "Astro Casinos";

function Home() {
  return (
    <div>
      <Head>
        <title>{titleName}</title>
        <meta name="description" content="TO BE WRITEN" />

        {/* */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <NavBar /> */}
      <main>
        <TopCryptoNews />
        <section>{/* latest blogs */}</section>
        <section> {/* bitcoin news */}</section>
      </main>
      {/* Footer */}
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
