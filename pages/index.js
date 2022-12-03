import Head from "next/head";
import TopCryptoNews from "../components/home/featuredNews";

function Home() {
  const titleName = "Astro Casinos";

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
