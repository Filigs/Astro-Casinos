import PostNews from "../components/admin/postForm";
import Head from "next/head";

function News() {
  const titleName = "VolaCrypto.io - News";
  return (
    <div>
      <Head>
        <title>{titleName}</title>
        <meta name="description" content="TO BE WRITEN" />

        {/* */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-full text-center lg:text-8xl lg:my-40">
        Coming soon...
      </main>
    </div>
  );
}
export default News;
