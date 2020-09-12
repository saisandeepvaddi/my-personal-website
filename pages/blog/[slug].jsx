import React from "react";
import { getBlogPostFileMeta } from "../../utils/blog";
import { readFileSync } from "fs";
import { getFrontMatter } from "../../utils/mdxUtils";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import Layout from "../../components/layout";

const components = {};
function Post({ source, frontMatter }) {
  const content = hydrate(source, components);
  return (
    <Layout>
      <h1>{frontMatter.title}</h1>
      {content}
    </Layout>
  );
}

export default Post;

export async function getStaticProps({ params }) {
  const { slug } = params;
  const blogPostFiles = getBlogPostFileMeta();
  const post = blogPostFiles.find((postMeta) => postMeta.slug === slug);

  const fileData = readFileSync(post.path);
  const { content, data } = getFrontMatter(fileData);
  const source = await renderToString(content, { components, scope: data });
  return { props: { frontMatter: data, slug, source } };
}

export async function getStaticPaths() {
  const blogPostFiles = getBlogPostFileMeta();
  const paths = blogPostFiles.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
