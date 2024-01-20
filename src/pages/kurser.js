import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
//sidans namn blir kurser efter namnet på javascript-filen

const SecondPage = () => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  const data = useStaticQuery(graphql`
    query {
      allContentfulCourse(sort: { createdAt: ASC }) {
        edges {
          node {
            heading
            slug
            imageOfCourse {
              gatsbyImageData(width: 1080)
            }
            coursetext
          }
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <title>Kompetenser</title>
        <meta
          name="description"
          content="Den här sidan visar bilka kursen jag tagit på It-högskolan"
        />
      </Helmet>
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
                <div className="row" style={{ marginBottom: "1rem" }}>
                  <div className="col-sm-6 text-center">
                    {isClient && (
                      <GatsbyImage
                        className="gatsbyImage"
                        alt={edge.node.heading}
                        image={edge.node.imageOfCourse.gatsbyImageData}
                      />
                    )}
                  </div>
                  <div className="col-sm-6">
                    <div className="container textContent textInfo text-center">
                      <h1> {edge.node.heading}</h1>
                    </div>
                    <div className="container textContent portfolioText text-center">
                      {edge.node.coursetext}
                    </div>
                    {/* // Länk till kurser och där slug hämtar in mina enskilda kurser */}

                    <div className=" container button">
                      <Link to={`/kurser/${edge.node.slug}`}>
                        Läs mer om kursen
                      </Link>
                    </div>
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
    </>
  )
}

export const Head = () => <title>Kompetenser</title>
export default SecondPage
