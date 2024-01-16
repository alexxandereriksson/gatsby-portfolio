import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AboutTemplate from "../templates/about-template"
import HomeTemplate from "../templates/home-template"
import Portfoliotemplate from "../templates/portfolio-template"
import ContactTemplate from "../templates/contact-template"

// Tar in graphQL data props.
const Page = ({ data }) => {
  console.log(data)
  // extraherear contentfulpage obj från data propsen.
  const { contentfulPage } = data
  // Tar in contentful obj till min switch funktion
  const getTemplate = contentfulPage => {
    // Kollar om contentful.template finns och om i sådanafall returnera min Component-template.
    switch (contentfulPage.template) {
      case "contact":
        return <ContactTemplate {...contentfulPage} />
      case "about":
        return <AboutTemplate {...contentfulPage} />
      case "portfolio":
        return <Portfoliotemplate {...contentfulPage} />
      default:
        //Om ingen specifik mall matchar, rendera HomeTemplate med contentfulPage-egenskaperna.
        return <HomeTemplate {...contentfulPage} />
    }
  }
  // Render the chosen template within a Layout component, passing the contentfulPage object as props.
  return <Layout>{getTemplate(contentfulPage)}</Layout>
}

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      content {
        raw
      }
      url
      title
      heading
      template
      image {
        gatsbyImage(width: 468, height: 540)
      }
    }
  }
`

export default Page
