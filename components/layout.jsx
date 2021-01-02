import React from "react";
import Footer from "./Footer/Footer";
import Nav from "./nav";

const debugClass =
  process?.env?.NODE_ENV !== "production" ? "debug-screens" : "";

function Layout({ children }) {
  return (
    <main className={`${debugClass}`}>
      <Nav />
      <section className="container mx-auto max-w-3xl px-5 py-8">
        {children}
      </section>
      <Footer />
    </main>
  );
}

export default Layout;
