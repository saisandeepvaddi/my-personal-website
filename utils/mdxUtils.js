import matter from "gray-matter";
export function getFrontMatter(source) {
  const frontMatter = matter(source);
  return frontMatter;
}
