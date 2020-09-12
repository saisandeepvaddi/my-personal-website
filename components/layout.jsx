import React from "react";
import Nav from "./nav";

function Layout({ children }) {
  return (
    <main>
      <Nav />
      {children}
    </main>
  );
}

export default Layout;
