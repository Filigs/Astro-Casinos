import Head from "next/head";
import Account from "../components/Users/Account";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
function ProfilePage() {
  const titleName = "VolaCrypto.io - ProfilePage";
  const session = useSession();
  const supabase = useSupabaseClient();
  return (
    <div>
      <Head>
        <title>{titleName}</title>
        <meta name="description" content="TO BE WRITEN" />

        {/* */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container" style={{ padding: "50px 0 100px 0" }}>
          {!session ? (
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="dark"
            />
          ) : (
            <Account session={session} />
          )}
        </div>
      </main>
    </div>
  );
}
export default ProfilePage;
