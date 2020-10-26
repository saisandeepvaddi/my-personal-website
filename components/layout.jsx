import React from "react";
import Footer from "./Footer/Footer";
import Nav from "./nav";

function Layout({ children }) {
  return (
    <main>
      <Nav />
      <section className="container mx-auto max-w-2xl px-5 py-8">
        {children}
      </section>
      <Footer />
    </main>
  );
}

export default Layout;
