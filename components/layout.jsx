import React from "react";
import Nav from "./nav";

function Layout({ children }) {
  return (
    <main>
      <Nav />
      <section style={{ maxWidth: "50em", margin: "0 auto" }}>
        {children}
      </section>
    </main>
  );
}

export default Layout;
