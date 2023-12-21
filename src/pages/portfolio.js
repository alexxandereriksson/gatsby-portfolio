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
      <h1>Välkommen till sidan om mina kurser</h1>
      <p>
        Här nedanför visar jag upp vilka kurser som jag gått på It-högskolan
      </p>

      <ul className="posts">
        {data.allContentfulCourse.edges.map(edge => {
          return (
            <>
              <li className="post" key={edge.node.heading}>
                <h2>{edge.node.heading}</h2>
                <GatsbyImage
                  alt={edge.node.heading}
                  image={edge.node.imageOfCourse.gatsbyImage}
                ></GatsbyImage>
                <p className="parra">{edge.node.coursetext}</p>
              </li>
              <div className="button">
                <Link to={`/portfolio/${edge.node.slug}/`}>Read More</Link>
              </div>
            </>
          )
        })}
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default SecondPage
