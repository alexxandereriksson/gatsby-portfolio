import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AboutTemplate from "../templates/about-template"
import HomeTemplate from "../templates/home-template"
import Portfoliotemplate from "../templates/portfolio-template"

const Page = props => {
  const { data } = props

  const { contentfulPage } = data
  const getTemplate = contentfulPage => {
    switch (contentfulPage.template) {
      case "about":
        return <AboutTemplate {...contentfulPage} />
      case "portfolio":
        return <Portfoliotemplate {...contentfulPage} />
      default:
        return <HomeTemplate {...contentfulPage} />
    }
  }
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
      template
      image {
        gatsbyImage(width: 468, height: 540)
      }
    }
  }
`

export default Page
