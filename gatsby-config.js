module.exports = {
  siteMetadata: {
    title: "hello-devices",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `IBM Plex Mono`,
          `monospace` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
};
