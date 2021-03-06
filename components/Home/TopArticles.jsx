import React from "react";
import Link from "next/link";

const articleLinks = [
  {
    title: "How to create web-based terminals",
    href: "/blog/how-to-create-web-based-terminals",
  },
  {
    title: "Creating a custom menu bar in Electron",
    href: "/blog/how-to-create-custom-menu-bar-in-electron",
  },
  {
    title: "Simple structure to write forms in React with Formik",
    href: "/blog/simple-react-forms-with-formik",
  },
];

function TopArticles() {
  return (
    <section className="container mx-auto max-w-2xl prose prose-sm top-item-list">
      <h3 className="mb-3 font-bold">Blog Posts</h3>

      <ul className="space-y-2 md:space-y-4">
        {articleLinks.map((article) => (
          <li key={article.title}>
            <Link href={article.href}>
              <a className="list-item hover:underline">{article.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4"></div>
      <Link href="/blog">
        <a aria-label="All blog posts">See all blog posts</a>
      </Link>
    </section>
  );
}

export default TopArticles;
