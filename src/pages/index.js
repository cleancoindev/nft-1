import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import NFT from "../components/nft";
import Leaderboard from "../components/leaderboard";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`showtime`, `ethereum`, `token`, `nft`]}
        title="NFT"
      />
      <Hero />
      <NFT />
      <Leaderboard />
    </Layout>
  );
}

export default IndexPage;
