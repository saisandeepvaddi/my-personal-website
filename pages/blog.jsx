import React from "react";
import Layout from "../components/layout";
// import renderToString from "next-mdx-remote/render-to-string";
// import hydrate from "next-mdx-remote/hydrate";
import { readFileSync } from "fs";
import { getFrontMatter } from "../utils/mdxUtils";
import Link from "next/link";
import { getBlogPostFileMeta } from "../utils/blog";
import { formatDate } from "../utils/general";

function Blog({ posts }) {
  return (
    <Layout>
      <ul className="space-y-4">
        {posts.map(({ matter, slug }, i) => (
          <li key={matter.title ?? i}>
            <Link href={`/blog/${slug}`}>
              <a className="text-xl font-bold styled-link">{matter.title}</a>
            </Link>
            <div>
              <span className="text-sm italic">{formatDate(matter.date)}</span>
            </div>
            <p>{matter.description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default Blog;

export async function getStaticProps() {
  const blogPostFiles = getBlogPostFileMeta();
  const posts = blogPostFiles.map(({ path, slug }) => {
    const content = readFileSync(path);
    const { data } = getFrontMatter(content);
    return { matter: data, slug };
  });

  posts.sort((a, b) => new Date(b.matter.date) - new Date(a.matter.date));

  return {
    props: {
      posts,
    },
  };
}
