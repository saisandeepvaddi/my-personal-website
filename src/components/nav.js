import React from "react";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography";
import DarkModeToggle from "./dark-mode-toggle";

function Nav() {
  return (
    <nav className="navbar d-flex justify-end top-navbar">
      <div className="nav-links" style={{ paddingRight: rhythm(1) }}>
        <Link to="/blog" className="boring-link" style={{ color: "#34475a" }}>
          Blog
        </Link>
      </div>
      <div className="nav-links" style={{ paddingRight: rhythm(1) }}>
        <Link to="/about" className="boring-link" style={{ color: "#34475a" }}>
          About
        </Link>
      </div>
      <div style={{ marginRight: 20 }}>
        <DarkModeToggle />
      </div>
    </nav>
  );
}

export default Nav;
