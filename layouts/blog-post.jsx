import React from "react";

export default function BlogPost({ children, frontMatter }) {
  return (
    <article>
      <h1>{frontMatter.title}</h1>
      {children}
    </article>
  );
}
