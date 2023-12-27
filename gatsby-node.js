const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulCourse {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulCourse.edges.forEach(edge => {
    createPage({
      path: `/kurser/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
