import Head from "next/head";
const titleName = "Astro Casinoss";

export default function Home() {
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
        <section>{/* Top news */}</section>
        <section>{/* latest blogs */}</section>
        <section> {/* bitcoin news */}</section>
      </main>
      {/* Footer */}
    </div>
  );
}
