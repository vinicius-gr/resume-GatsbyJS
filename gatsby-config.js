require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typography`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.REPO_NAME,
        accessToken: process.env.ACCESS_TOKEN
      }
    }
  ]
};
