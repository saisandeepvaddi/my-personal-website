import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { useStaticQuery, graphql } from "gatsby";

function ContactLinks() {
  const data = useStaticQuery(graphql`
    query ContactLinksQuery {
      site {
        siteMetadata {
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
  const { github, linkedin, twitter, email } = data.site.siteMetadata.social;

  return (
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
        className="social-link"
      >
        <DiGithubBadge size={25} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://twitter.com/${twitter}`}
        className="social-link"
      >
        <FiTwitter size={25} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://linkedin.com/in/${linkedin}`}
        className="social-link"
      >
        <FiLinkedin size={25} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        href={`mailto:${email}`}
      >
        <AiOutlineMail size={25} />
      </a>
    </div>
  );
}

export default ContactLinks;
