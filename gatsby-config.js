module.exports = {
  siteMetadata: {
    title: `Sai Sandeep Vaddi`,
    author: `Sai Sandeep Vaddi`,
    description: `Software Engineer and Open-Source developer. This is my personal website and blog.`,
    siteUrl: `https://saisandeepvaddi.com`,
    social: {
      github: `saisandeepvaddi`,
      linkedin: `saisandeepvaddi`,
      twitter: `saisandeepvaddi`,
      email: `saisandeepvaddi@gmail.com`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          // {
          //   resolve: `gatsby-remark-responsive-iframe`,
          //   options: {
          //     wrapperStyle: `margin-bottom: 1.0725rem`,
          //   },
          // },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
        trackingId: `UA-99985724-5`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sai Sandeep Vaddi`,
        short_name: `svaddi`,
        start_url: `/`,
        background_color: `#34475a`,
        theme_color: `#407cca`,
        display: `minimal-ui`,
        icon: `content/assets/my-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    "gatsby-plugin-use-dark-mode",
    `gatsby-plugin-sass`,
  ],
};
