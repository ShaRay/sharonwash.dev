// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Learning to Code Blog",
  siteDescription: "A blog to help me retain what I am learning",
  titleTemplate: "%s - Learning to Code Blog",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        typeName: "Post",
        route: "/blog/:slug"
      }
    },
    {
      use: "gridsome-plugin-tailwindcss"
    }
  ]
};
