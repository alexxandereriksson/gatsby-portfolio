import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AboutTemplate from "../templates/about-template"
import HomeTemplate from "../templates/home-template"
import Portfoliotemplate from "../templates/portfolio-template"
import ContactTemplate from "../templates/contact-template"
import Template404 from "../templates/404-template"

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
      case "404":
        return <Template404 {...contentfulPage} />
      case "about":
        return <AboutTemplate {...contentfulPage} />
      case "portfolio":
        return <Portfoliotemplate {...contentfulPage} />
      default:
        //Om ingen specifik mall matchar, rendera HomeTemplate med contentfulPage-egenskaperna.
        return <HomeTemplate {...contentfulPage} />
    }
  }

  // Renderar den valda templaten inom layout componenten, med contenfulPage objektet som en prop.
  return <Layout>{getTemplate(contentfulPage)}</Layout>
}

// Hämtar data för mina templates
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
