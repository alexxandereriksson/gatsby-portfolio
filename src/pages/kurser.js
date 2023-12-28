import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
// import { renderRichtext } from "gatsby-source-contentful/rich-text"

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
              gatsbyImage(width: 200)
            }
            coursetext
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1 className="text-center">Välkommen till sidan om mina kurser</h1>
      <p className="text-center" style={{paddingTop:'10vh'}}>
        Här nedanför visar jag upp vilka kurser som jag gått på It-högskolan
      </p>

      <div className="container">
        {data.allContentfulCourse.edges.map(edge => {
          return (
            <>
              <ul className="row" key={edge.node.heading}>
                <div className="col-12 text-center"key={edge.node.heading}>
                  <h2>{edge.node.heading} </h2>
                </div>
                <div className="col-12 text-center">
                  <GatsbyImage
                    alt={edge.node.heading}
                    image={edge.node.imageOfCourse.gatsbyImage}
                  ></GatsbyImage>
                    <p className="parra">{edge.node.coursetext}</p>
                </div>

                <div className="col-6">

                </div>
              </ul>
              <div className="button text-center">
                <Link to={`/kurser/${edge.node.slug}`}>Read More</Link>
              </div>
            </>
          )
        })}
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default SecondPage
