import React from "react";
import Nav from "./nav";

function Layout({ children }) {
  return (
    <main>
      <Nav />
      <section className="container mx-auto p-4">{children}</section>
    </main>
  );
}

export default Layout;
