import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
//import Hero from "../components/hero";
import Featured from "../components/Featured";
import Leaderboard from "../components/Leaderboard";
import Auth from "../pages/auth";

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[`showtime`, `ethereum`, `token`, `nft`]} title="NFT" />
      <Auth />
      {/*<Hero />*/}
      <Featured />
      <Leaderboard />
    </Layout>
  );
}

export default IndexPage;
