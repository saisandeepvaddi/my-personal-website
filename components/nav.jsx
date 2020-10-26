import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between md:justify-around px-4 py-3">
        <div>
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </div>
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <Link href="/blog">
                <a className="nav-link">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
