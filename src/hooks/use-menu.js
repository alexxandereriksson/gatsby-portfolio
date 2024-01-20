import { graphql, useStaticQuery } from "gatsby"
// Hämtar data till min menu hook.
const useMenu = () => {
  const { allContentfulPage } = useStaticQuery(graphql`
    query {
      allContentfulPage(sort: { url: ASC }) {
        edges {
          node {
            title
            url
          }
        }
      }
    }
  `)
  return allContentfulPage.edges
}

export default useMenu
