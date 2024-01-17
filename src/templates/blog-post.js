import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export const query = graphql`
  query ($slug: String!) {
    contentfulCourse(slug: { eq: $slug }) {
      heading
      imageOfCourse {
        gatsbyImageData(width: 200)
      }
      coursetext
    }
  }
`

const BlogPost = ({ data }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const course = data.contentfulCourse

  return (
    <React.Fragment>
      <Helmet>
        <title>{course.heading}</title>
        <meta name="description" content={course.coursetext} />
      </Helmet>
      <Layout>
        <div className="container text-center">
          <div className="four" style={{marginTop:"15vh"}}>
            <h1>{course.heading}</h1>
            </div>

            {isClient && course.imageOfCourse && (
              <GatsbyImage
                image={course.imageOfCourse.gatsbyImageData}
                alt={course.heading}
              />
            )}
            <p>{course.coursetext}</p>
          <div className=" container button">
            <Link className="btnTag" to="/kurser/">
              Tillbaka till kompetenser
            </Link>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default BlogPost
