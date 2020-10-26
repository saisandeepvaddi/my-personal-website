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
import SEO from "../../components/SEO/SEO";

const components = {};
function Post({ source, frontMatter, stats, slug }) {
  const content = hydrate(source, components);
  return (
    <Layout>
      <SEO
        title={frontMatter.title ?? "Blog - Sai Sandeep Vaddi"}
        description={
          frontMatter.title ??
          content?.substring(0, Math.max(200, content.length))
        }
        canonical={`https://saisandeepvaddi.com/blog/${slug}`}
      />
      <article className="blog-post container mx-auto max-w-3xl p-4">
        <h1 className="text-4xl text-blue-900">{frontMatter.title}</h1>
        <div className="flex justify-between flex-wrap mb-4">
          <span className="text-gray-600 italic">
            {formatDate(frontMatter?.date)}
          </span>
          <span className="text-gray-600 italic">{stats?.text}</span>
          <span className="text-gray-600 italic">{stats?.words} words</span>
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
