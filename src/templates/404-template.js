import React from "react"
import { Helmet } from "react-helmet"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
const Template404 = contentfulPage => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
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
      <section className="container text-center">
        <div className="row" style={{ marginTop: "0vh" }}>
          <div className="col-md-12">
            <div className="textContent">
              <div className="four">
                {contentfulPage.title}
              </div>
              <div className="four">
                <div>{renderRichText(contentfulPage.content, options)}</div>
              </div>
            </div>
            {/* Content for the second column */}
            <div style={{ marginTop: "1vh" }}>
              {contentfulPage.image && (
                <GatsbyImage
                  className="heroImage"
                  image={contentfulPage.image.gatsbyImage}
                  alt={contentfulPage.title}
                />
              )}
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

export default Template404
