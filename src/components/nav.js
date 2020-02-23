import React from "react";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography";
import DarkModeToggle from "./dark-mode-toggle";

function Nav() {
  return (
    <div className="navbar">
      <div className="text-right nav-links" style={{ paddingRight: rhythm(2) }}>
        <Link to="/blog" style={{ color: "#34475a" }}>
          Blog
        </Link>
        <span style={{ padding: "20px" }}></span>
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default Nav;
