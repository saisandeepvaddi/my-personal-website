import React from "react";
import Home from "../components/Home/home";
import Layout from "../components/layout";
import SEO from "../components/SEO/SEO";

function Index() {
  return (
    <Layout>
      <SEO
        title="Home | Sai Sandeep Vaddi"
        description="Software Developer. Works on Web Applications. JavaScript enthusiast."
      />
      <Home />
    </Layout>
  );
}

export default Index;
