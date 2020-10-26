import React from "react";
import AboutMe from "../components/About/AboutMe";
import Layout from "../components/layout";
import SEO from "../components/SEO/SEO";

function About() {
  return (
    <Layout>
      <SEO
        title="About Me | Sai Sandeep Vaddi"
        description="Software Developer. Works on Web Applications. JavaScript enthusiast."
      />
      <AboutMe />
    </Layout>
  );
}

export default About;
