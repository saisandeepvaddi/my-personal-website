import React from "react";
import { getBlogPostFileMeta } from "../../utils/blog";
import { readFileSync } from "fs";
import { getFrontMatter } from "../../utils/mdxUtils";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import readingTime from "reading-time";
import Layout from "../../components/layout";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import { formatDate } from "../../utils/general";

const components = {};
function Post({ source, frontMatter, stats }) {
  const content = hydrate(source, components);
  return (
    <Layout>
      <article className="blog-post blog-post-container">
        <h1>{frontMatter.title}</h1>
        <div
          className="d-flex justify-between flex-wrap"
          style={{ marginTop: 10 }}
        >
          <h4 className="color-disabled">{formatDate(frontMatter?.date)}</h4>
          <h4 className="color-disabled">{stats?.text}</h4>
          <h4 className="color-disabled">{stats?.words} words</h4>
        </div>
        {content}
      </article>
    </Layout>
  );
}

export default Post;

export async function getStaticProps({ params }) {
  const { slug } = params;
  const blogPostFiles = getBlogPostFileMeta();
  const post = blogPostFiles.find((postMeta) => postMeta.slug === slug);

  const fileData = readFileSync(post.path);
  const { content, data: frontMatter } = getFrontMatter(fileData);
  const source = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [
        require("remark-autolink-headings"),
        require("remark-slug"),
        require("remark-code-titles"),
      ],
      rehypePlugins: [require("mdx-prism")],
    },
    scope: frontMatter,
  });
  const stats = readingTime(content);
  return { props: { frontMatter, slug, source, stats } };
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
