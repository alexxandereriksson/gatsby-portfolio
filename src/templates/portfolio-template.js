import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

const Portfoliotemplate = contentfulPage => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjects(sort: { createdAt: ASC }) {
        edges {
          node {
            title
            projectDescription
            projectImage {
              gatsbyImageData(width: 1100)
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta
          name="description"
          content="this page is for my portfolio items"
        />
      </Helmet>
      <div className="container">
        <h2 className="portfolioTitle textInfo">{contentfulPage.title}</h2>
        {data.allContentfulProjects.edges.map((edge, index) => {
          return (
            <div key={index}>
              <div className="row" style={{ marginBottom: "5rem" }}>
                <div className="col-sm-6">
                  <div>
                    {edge.node.projectImage &&
                      edge.node.projectImage.gatsbyImageData && (
                        <GatsbyImage
                          alt={edge.node.title}
                          image={edge.node.projectImage.gatsbyImageData}
                        />
                      )}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="container text-center textInfo textContent">
                    {edge.node.title}
                  </div>
                  <div className="container textContent portfolioText">
                    {edge.node.projectDescription}
                  </div>
                  <div className="myButtonscontainer portfolioButton">
                    <button className="myBtn primary">
                      <a
                        className="btnTag"
                        href="https://github.com/alexxandereriksson"
                      >
                        Github
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className=" container button" style={{ marginTop: "5rem" }}>
        <Link to="/">Tillbaka till förstasidan</Link>
      </div>
    </>
  )
}

export default Portfoliotemplate
