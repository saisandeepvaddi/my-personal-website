import React from "react";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography";
import DarkModeToggle from "./dark-mode-toggle";

function Nav() {
  return (
    <div className="navbar d-flex justify-end">
      <div className="nav-links" style={{ paddingRight: rhythm(2) }}>
        <Link to="/blog" style={{ color: "#34475a" }}>
          Blog
        </Link>
      </div>
      <div style={{ marginRight: 20 }}>
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default Nav;
