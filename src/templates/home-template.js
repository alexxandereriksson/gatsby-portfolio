import React from "react"
// import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const HomeTemplate = contentfulPage => {
  return (
    <section className="container">
    <h2>{contentfulPage.title}</h2>

    <div className="row">
      <div className="col-md-6">
        {/* Content for the first column */}
        Hello mamam
        {contentfulPage.raw}
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
  )
}

export default HomeTemplate
