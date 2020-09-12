// // ~~Inspired~~ Copied from leerob.io website.
// // https://github.com/leerob/leerob.io
// const readingTime = require("reading-time");
// const mdxPrism = require("mdx-prism");
// const withMdxEnhanced = require("next-mdx-enhanced");

// module.exports = withMdxEnhanced({
//   layoutPath: "layouts",
//   defaultLayout: true,
//   remarkPlugins: [
//     require("remark-autolink-headings"),
//     require("remark-slug"),
//     require("remark-code-titles"),
//     // require("./utils/title-style"),
//   ],
//   rehypePlugins: [mdxPrism],
//   extendFrontMatter: {
//     process: (mdxContent) => ({
//       wordCount: mdxContent.split(/\s+/gu).length,
//       readingTime: readingTime(mdxContent),
//     }),
//   },
// })({
//   webpack: (config) => {
//     return config;
//   },
// });
