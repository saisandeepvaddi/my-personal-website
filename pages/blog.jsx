import React from "react";
import Layout from "../components/layout";
// import renderToString from "next-mdx-remote/render-to-string";
// import hydrate from "next-mdx-remote/hydrate";
import { readFileSync } from "fs";
import { getFrontMatter } from "../utils/mdxUtils";
import Link from "next/link";
import { getBlogPostFileMeta } from "../utils/blog";

function Blog({ posts }) {
  return (
    <Layout>
      <ul>
        {posts.map(({ matter, slug }, i) => (
          <li key={matter.title ?? i}>
            <Link href={`/blog/${slug}`}>
              <a>{matter.title}</a>
            </Link>
            <span>{matter.date}</span>
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

  return {
    props: {
      posts,
    },
  };
}
