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

          <Script src="..\node_modules\flowbite\dist\flowbite.js" />
          {/* SEO */}
          <meta name="robots" content="all" />
          {/* social media url preview */}
          <meta property="og:url" content="AstroCasinos.com" />
          <meta property="og:title" content="News Feed made for newbies" />
          <meta property="og:description" content="AstroCasinos.com" />
          <meta property="og:image" content="#" />
          <meta property="og:site_name" content="News Feed made for newbies" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="#" />
          <meta
            name="twitter:creator"
            content="Nuno Filipe Martins - Freelancer Web Developer"
          />
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

        <body className="text-dark bg-gray-100 antialiased scroll-smooth">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default myDocument;
