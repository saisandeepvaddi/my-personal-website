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

function Blog({ posts }) {
  if (typeof window !== "undefined") {
    console.log("posts: ", posts);
  }

  const [filteredPosts, setFilteredPosts] = React.useState(posts);
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
      <ul className="space-y-4">
        {filteredPosts.map(({ matter, slug }, i) => (
          <li key={matter.title ?? i}>
            <Link href={`/blog/${slug}`}>
              <a className="text-xl font-bold styled-link">{matter.title}</a>
            </Link>
            <div>
              <span className="text-sm italic">{formatDate(matter.date)}</span>
            </div>
            <p>{matter.description}</p>
            <div>
              <ul className="space-x-1 list-none">
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

  posts.sort((a, b) => new Date(b.matter.date) - new Date(a.matter.date));

  return {
    props: {
      posts,
    },
  };
}
