import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";
import DarkModeToggle from "./dark-mode-toggle";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            className="boring-link"
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#34475a`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        // <h3
        //   style={{
        //     fontFamily: `Montserrat, sans-serif`,
        //     marginTop: 0,
        //     marginBottom: 0,
        //   }}
        // >
        <Link
          className="boring-link"
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `#34475a`,
          }}
          to={`/`}
        >
          Home
        </Link>
        // </h3>
      );
    }
    return (
      <div className="blog-layout">
        <nav className="navbar d-flex justify-between blog-nav-bar">
          <div className="nav-links">
            <header>{header}</header>
          </div>
          <div className="d-flex justify-end top-navbar">
            <div className="nav-links" style={{ paddingRight: rhythm(1) }}>
              <Link
                to="/blog"
                className="boring-link"
                style={{ color: "#34475a" }}
              >
                Blog
              </Link>
            </div>
            <div className="nav-links" style={{ paddingRight: rhythm(1) }}>
              <Link
                to="/about"
                className="boring-link"
                style={{ color: "#34475a" }}
              >
                About
              </Link>
            </div>
            <div style={{ marginRight: 20 }}>
              <DarkModeToggle />
            </div>
          </div>
        </nav>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            marginTop: rhythm(1),
            maxWidth: rhythm(28),
            padding: `${rhythm(2)} ${rhythm(3 / 4)}`,
          }}
        >
          <main>{children}</main>
        </div>
      </div>
    );
  }
}

export default Layout;
