import React from "react"
import { Helmet } from "react-helmet"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
const ContactTemplate = contentfulPage => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
            // satt ett nytt classnamn på länken för att det ska stylas efter min style.
          <a href={uri} className="myBtn secondary">
            {children}
          </a>
        )
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>
      },
    },
  }
  return (
    <>
      <Helmet>
        <title>Kontakta mig</title>
        <meta name="description" content="kontakt sida" />
      </Helmet>
      <section className="container">
        <div className="row" style={{ marginTop: "0vh" }}>
          <div className="col-md-6">
            {/* Content for the second column */}
            <div style={{ marginTop: "15vh" }}>
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
                <div>{renderRichText(contentfulPage.content, options)}</div>
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

export default ContactTemplate
