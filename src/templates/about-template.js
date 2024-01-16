import React from "react"
import { Helmet } from "react-helmet"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
const AboutTemplate = contentfulPage => {
  return (
    <>
      <Helmet>
        <title>Om mig</title>
        <meta
          name="description"
          content="this page is for my portfolio items"
        />
      </Helmet>
      <section className="container">
        <div className="row" style={{ marginTop: "0vh" }}>
          <div className="col-md-6">
            {/* Content for the second column */}
            <div className="myBorder" style={{ marginTop: "15vh" }}>
              {contentfulPage.image && (
                <GatsbyImage
                  className="heroImage"
                  image={contentfulPage.image.gatsbyImage}
                  alt={contentfulPage.title}
                />
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="textContent">
              <div className="textName" style={{ marginBottom: "5vh" }}>
                {contentfulPage.title}
              </div>
              <div className="aboutmeText">
                <div>{renderRichText(contentfulPage.content)}</div>
              </div>
            </div>
          </div>
        </div>
        <div className=" container button">
          <Link to="/">Tillbaka till förstasidan</Link>
        </div>
      </section>
    </>
  )
}

export default AboutTemplate
