import React, { useEffect, useContext } from "react";

import Featured from "../components/Featured";
import Leaderboard from "../components/Leaderboard";
import SEO from "../components/seo";
import { Link } from "gatsby";
import WalletButton from "../components/wallet";
import { Magic } from "magic-sdk";
import { Context as AuthContext } from "../context/AuthContext";
import Cookies from "universal-cookie";

const IndexPage = () => {
  const {
    attemptSigninFromCookie,
    state: { isLoggedIn },
  } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const m = new Magic("pk_test_7FF6C3036AF5DE22");

      try {
        await m.auth.loginWithCredential(window.location.search);
        const did = await m.user.generateIdToken({
          //setting 30 day expiration
          lifespan: 60 * 60 * 24 * 30,
        });
        const cookies = new Cookies();
        cookies.set("did", did, { path: "/" });
      } catch (e) {
        // Handle errors if required!
        console.log(e);
      } finally {
        attemptSigninFromCookie();
      }
    })();
  }, []);

  return (
    <div>
      <SEO
        keywords={[`showtime`, `ethereum`, `token`, `nft`]}
        title="Profile"
      />
      <header className="font-bol bg-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" className="flex items-center mb-4 md:mb-0">
            <span className="font-bol text-2xl">Showtime</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
          <WalletButton />
        </div>
      </header>
      <Featured />
      <Leaderboard />
    </div>
  );
};

export default IndexPage;
