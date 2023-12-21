import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
// import Img from "gatsby-image"

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
  const course = data.contentfulCourse
  return (
    <Layout>
      <Link to="/portfolio/">Visit the Blog Page</Link>
      <div className="content">
        <h1>{course.heading}</h1>

        <GatsbyImage
          image={course.imageOfCourse.gatsbyImageData}
          alt={course.heading}
        />
         <p>{course.coursetext}</p>
      </div>
    </Layout>
  )
}

export default BlogPost
