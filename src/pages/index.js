import React from "react";
import { graphql } from "gatsby";

import Home from "../components/home";
import SEO from "../components/seo";

class Index extends React.Component {
  render() {
    return (
      <>
        <SEO
          title="Sai Sandeep Vaddi - Software Developer"
          description={
            "Software Engineer. Open Source Developer. Welcome to my website. This is where I share things."
          }
        />
        <Home />
      </>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
