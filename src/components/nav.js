import React from "react";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography";

function Nav() {
  return (
    <div className="navbar">
      <div className="text-right nav-links" style={{ paddingRight: rhythm(2) }}>
        <Link to="/blog" style={{ color: "#34475a" }}>
          Blog
        </Link>
      </div>
    </div>
  );
}

export default Nav;
