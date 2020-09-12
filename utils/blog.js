// import hydrate from "next-mdx-remote/hydrate";
import { readdirSync } from "fs";
import { join } from "path";
export function getBlogPostSlug(filePath) {
  return filePath.replace(/^.*\/blog\//, "").replace(/\.mdx?$/, "");
}
export function getBlogPostFileMeta() {
  const blogPostDir = join(process.cwd(), "blog");
  const files = readdirSync(blogPostDir);
  const filePaths = files.map((fileName) => {
    const path = join(blogPostDir, fileName);
    const slug = getBlogPostSlug(fileName);
    return {
      fileName,
      path,
      slug,
    };
  });
  return filePaths;
}
