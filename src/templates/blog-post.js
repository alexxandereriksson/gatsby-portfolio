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
        <meta
          name="description"
          content="this page is for my portfolio items"
        />
      </Helmet>
      <Layout>
        <Link to="/kurser/">Visit the Blog Page</Link>
        <div className="content">
          <h1>{course.heading}</h1>
          {isClient && course.imageOfCourse && (
            <GatsbyImage
              image={course.imageOfCourse.gatsbyImageData}
              alt={course.heading}
            />
          )}
          <p>{course.coursetext}</p>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default BlogPost
