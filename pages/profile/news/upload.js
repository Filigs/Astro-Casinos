import PostNews from "components/Users/news/postForm";
import Head from "next/head";

function Admin() {
  const titleName = "VolaCrypto.io - Admin";
  return (
    <div>
      <Head>
        <title>{titleName}</title>
        <meta name="description" content="TO BE WRITEN" />

        {/* */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PostNews />
      </main>
    </div>
  );
}

export default Admin;
