import React from "react";
import Layout from "../components/layout";
// import renderToString from "next-mdx-remote/render-to-string";
// import hydrate from "next-mdx-remote/hydrate";
import { readFileSync } from "fs";
import { getFrontMatter } from "../utils/mdxUtils";
import Link from "next/link";
import { getBlogPostFileMeta } from "../utils/blog";
import { formatDate } from "../utils/general";
import Tag from "../components/Tag/Tag";
import SEO from "../components/SEO/SEO";

function Blog({ posts }) {
  const [filteredPosts, setFilteredPosts] = React.useState(posts ?? []);
  const [isFiltered, setIsFiltered] = React.useState(false);

  const handleTagClick = (tag) => {
    let filteredPosts = posts.filter((post) =>
      post?.matter?.tags?.includes(tag)
    );
    setFilteredPosts(filteredPosts);
    setIsFiltered(true);
  };

  const clearFilter = () => {
    setFilteredPosts(posts);
    setIsFiltered(false);
  };

  return (
    <Layout>
      <SEO
        title="Blog | Sai Sandeep Vaddi"
        description="My blog posts mostly about JavaScript, TypeScript, React, and NodeJS."
      />
      {isFiltered > 0 && (
        <div className="flex justify-end">
          <button
            onClick={() => clearFilter()}
            className="hover:underline font-bold"
          >
            &times; Clear Filters
          </button>
        </div>
      )}
      <ul className="space-y-4 prose max-w-3xl article-list">
        {filteredPosts.map(({ matter, slug }, i) => (
          <li key={matter.title ?? i} className="article-list-item">
            <Link href={`/blog/${slug}`}>
              <a className="text-xl font-bold styled-link">{matter.title}</a>
            </Link>
            <div>
              <span className="text-sm italic">{formatDate(matter.date)}</span>
            </div>
            <p className="article-description">{matter.description}</p>
            <div>
              <ul className="space-x-1 list-none tag-list">
                {matter?.tags?.map((tag, i) => (
                  <li key={i} className="inline-block">
                    <Tag tag={tag} onClick={handleTagClick} />
                  </li>
                ))}
              </ul>
            </div>
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

  posts.sort(
    (a, b) =>
      new Date(b.matter.date).getTime() - new Date(a.matter.date).getTime()
  );

  return {
    props: {
      posts,
    },
  };
}
