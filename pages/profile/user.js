import Head from "next/head";
import Account from "../../components/Users/Account";
import { Auth } from "@supabase/auth-ui-react";
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
        <div>
          {!session ? (
            <Auth supabaseClient={supabase} />
          ) : (
            <Account session={session} />
          )}
        </div>
      </main>
    </div>
  );
}
export default ProfilePage;
