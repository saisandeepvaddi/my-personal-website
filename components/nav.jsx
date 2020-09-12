import React from "react";
import Link from "next/link";
import DarkModeToggle from "./dark-mode-toggle";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <DarkModeToggle />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
