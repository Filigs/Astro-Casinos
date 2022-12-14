import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import Script from "next/script";

class myDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Alexandria:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <Script src="..\node_modules\flowbite\dist\flowbite.js" />
          {/* SEO */}
          <meta name="robots" content="all" />
          {/* social media url preview */}
          <meta property="og:url" content="VolaCrypto.io" />
          <meta property="og:title" content="VolaCrypto.io" />
          <meta property="og:description" content="VolaCrypto.io" />
          <meta property="og:image" content="#" />
          <meta property="og:site_name" content="VolaCrypto.io" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="VolaCrypto.io" />
          <meta name="twitter:creator" content="VolaCrypto.io" />
          <meta name="twitter:image" content="#" />
        </Head>
        {/* <!-- Google tag (gtag.js) --> */}
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K87HSVX1J2"
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K87HSVX1J2');
            `}
        </Script> */}

        <body className="h-full antialiased transition-all duration-75 text-dark dark:text-light scroll-smooth bg-fillerLight">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default myDocument;
