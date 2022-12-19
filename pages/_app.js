import "../styles/globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import React, { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const getLayout = Component.getLayout || ((page) => page); //layout.js

  return getLayout(
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <Layout>
        <SessionContextProvider
          supabaseClient={supabase}
          initialSession={pageProps.initialSession}
        >
          <Component {...pageProps} />
        </SessionContextProvider>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
