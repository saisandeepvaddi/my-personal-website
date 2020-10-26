import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";
import { FiLinkedin, FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <React.Fragment>
      <div className="flex justify-center">
        <hr className=" bg-black w-1/2 md:w-1/2 mb-5 mt-3" />
      </div>
      <div className="flex justify-center mb-5">
        <ul className="flex space-x-6">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://github.com/saisandeepvaddi`}
              className="social-link"
            >
              <DiGithubBadge size={25} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/saisandeepvaddi`}
              className="social-link"
            >
              <FiTwitter size={25} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://linkedin.com/in/saisandeepvaddi`}
              className="social-link"
            >
              <FiLinkedin size={25} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              href={`mailto:saisandeepvaddi@gmail.com`}
            >
              <AiOutlineMail size={25} />
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Footer;
