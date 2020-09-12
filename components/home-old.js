import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { scale } from "../utils/typography";

import Nav from "./nav";
import ContactLinks from "./ContactLinks";

function Home() {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 500, height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const author = data.site.siteMetadata.author;

  return (
    <div className="home-container">
      <Nav />
      <div className="main-container">
        <div className="contant-container">
          <div className="all-center">
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginBottom: 20,
                height: 125,
                width: 125,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
          </div>

          <header
            style={{
              ...scale(1),
              color: "#34475a",
              textAlign: "center",
              marginBottom: "0.1em",
            }}
          >
            {author}
          </header>
          <p
            className="all-center description"
            style={{
              fontSize: "1em",
              color: "#34475a",
              textAlign: "center",
              marginBottom: "0.5em",
            }}
          >
            Software Developer
          </p>
          <div className="hr"></div>
          <ContactLinks />
        </div>
      </div>
    </div>
  );
}

export default Home;
