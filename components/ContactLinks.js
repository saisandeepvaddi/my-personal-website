import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

function ContactLinks() {
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
        href={`https://github.com/saisandeepvaddi`}
        className="social-link"
      >
        <DiGithubBadge size={25} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://twitter.com/saisandeepvaddi`}
        className="social-link"
      >
        <FiTwitter size={25} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://linkedin.com/in/saisandeepvaddi`}
        className="social-link"
      >
        <FiLinkedin size={25} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        href={`mailto:saisandeepvaddi@gmail.com`}
      >
        <AiOutlineMail size={25} />
      </a>
    </div>
  );
}

export default ContactLinks;
