import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { Helmet } from "react-helmet"
const HomeTemplate = contentfulPage => {


    // Render richtextoptions
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} className="underline">
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
        <title>Homepage</title>
        <meta
          name="description"
          content="this page is for my portfolio items"
        />
      </Helmet>
      <section className="container">
        <div className="row" style={{ marginTop: "5vh" }}>
          <div className="col-md-6">
            <div className="textContent">
              <div className="textName" style={{ marginBottom: "5vh" }}>
               {contentfulPage.heading}
              </div>
              <div className="textInfo">
                <div>{renderRichText(contentfulPage.content, options)}</div>
              </div>
            </div>

            <div className="myButtonscontainer">
              <button className="myBtn primary">
                <a href="https://github.com/alexxandereriksson">Github</a>
              </button>
              <button className="myBtn secondary">
                {" "}
                <Link style={{ color: "white" }} to={"/portfolio"}>
                  {" "}
                  Mina projekt
                </Link>
              </button>
            </div>
          </div>

          <div className="col-md-6">
            {/* Content for the second column */}
            <div className="myBorder">
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
      </section>
    </>
  )
}

export default HomeTemplate
