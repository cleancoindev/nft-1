import PropTypes from "prop-types";
import React from "react";
import Footer from "./footer";
import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen" style={{ minHeight: "100vh" }}>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
