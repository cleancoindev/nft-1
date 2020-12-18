import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="bg-white" style={{height: "550px"}}>
        <h2 className="text-2xl text-black font-bol inline-block mt-8 p-3 mx-auto justify-center text-center flex">
          Page not found, go back <br/><a href="/" className="underline text-indigo-700">home</a>.
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
