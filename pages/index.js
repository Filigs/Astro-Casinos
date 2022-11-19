import Head from "next/head";
const titleName = "Astro Casinoss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{titleName}</title>
        <meta
          name="description"
          content="Nuno Filipe Martins, a web developer that uses React technologies to build responsive, lightweight and UX friendly apps or websites"
        />

        {/* */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <NavBar /> */}
      <main>
        <section>{/* Top news */}</section>
        <section>{/* latest blogs */}</section>
        <section> {/* bitcoin news */}</section>
      </main>
      {/* Footer */}
    </div>
  );
}
