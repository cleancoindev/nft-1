import PropTypes from "prop-types";
import React from "react";
import Footer from './footer'
import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main style={{
      background: 'radial-gradient(#C220FF, #AD00FF, #660096)'}}>
        {children}
      </main> 
      
      <Footer/>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
