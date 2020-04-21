import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { scale } from "../utils/typography";
import { DiGithubBadge } from "react-icons/di";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import Nav from "./nav";
import DarkModeToggle from "./dark-mode-toggle";

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
          social {
            github
            linkedin
            twitter
            email
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata.author;
  const { github, linkedin, twitter, email } = data.site.siteMetadata.social;

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
            style={{ ...scale(1), color: "#34475a", textAlign: "center" }}
          >
            {author}
          </header>
          <div className="hr"></div>

          <div
            className="links"
            style={{
              color: "#34475a",
            }}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://github.com/${github}`}
            >
              <DiGithubBadge size={25} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/${twitter}`}
            >
              <FiTwitter size={25} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://linkedin.com/in/${linkedin}`}
            >
              <FiLinkedin size={25} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`mailto:${email}`}
            >
              <AiOutlineMail size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
