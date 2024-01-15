import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

//sidans namn blir portfolio efter namnet på javascript-filen
const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCourse(sort: { createdAt: ASC }) {
        edges {
          node {
            heading
            slug
            imageOfCourse {
              gatsbyImage(width: 1200)
            }
            coursetext
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="text-center textContent textInfo">
          Välkommen till sidan om mina kurser
        </h1>
      </div>

      <div className="container">
        {data.allContentfulCourse.edges.map((edge, index) => {
          return (
            <div key={index}>
              <div className="row" style={{ marginBottom: "5rem" }}>
                <div className="col-sm-6">
                  <div className="container textContent textInfo text-center">
                    {edge.node.heading}
                  </div>
                  <div className="container textContent portfolioText text-center">
                    {edge.node.coursetext}
                  </div>
                  <div className=" container button">
                    <Link to={`/kurser/${edge.node.slug}`}>
                      Läs mer om kursen
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6 text-center">
                  <GatsbyImage
                    alt={edge.node.heading}
                    image={edge.node.imageOfCourse.gatsbyImage}
                  ></GatsbyImage>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className=" container button">
        <Link to="/">Tillbaka till förstasidan</Link>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Kurser Page</title>

export default SecondPage
