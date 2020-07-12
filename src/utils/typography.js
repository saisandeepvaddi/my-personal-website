import Typography from "typography";
// import Wordpress2016 from "typography-theme-wordpress-2016";
import TypographyTheme from "typography-theme-github";

// TypographyTheme.overrideThemeStyles = () => {
//   return {
//     "a.gatsby-resp-image-link": {
//       boxShadow: `none`,
//     },
//   };
// };

TypographyTheme.baseFontSize = "18px";

delete TypographyTheme.googleFonts;

const typography = new Typography(TypographyTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
