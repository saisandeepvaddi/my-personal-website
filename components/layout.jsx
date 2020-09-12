import React from "react";
import Nav from "./nav";

function Layout({ children }) {
  return (
    <main>
      <Nav />
      <section style={{ maxWidth: 800, margin: "auto" }}>{children}</section>
    </main>
  );
}

export default Layout;
