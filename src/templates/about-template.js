import React from "react"
import { Helmet } from "react-helmet"
import { renderRichText } from "gatsby-source-contentful/rich-text"
const AboutTemplate = contentfulPage => {

  return (
    <>
      <Helmet>
        <title>Om mig</title>
      </Helmet>
      <section className="container text-center">
        <h1>{contentfulPage.title}</h1>
        <h2>
          <div>{renderRichText(contentfulPage.content)}</div>
        </h2>
      </section>
    </>
  )
}

export default AboutTemplate
