import React from "react"
import { Link } from "gatsby"
const AboutTemplate = contentfulPage => {
  return (
    <>
      <section>
        <h2>{contentfulPage.title}</h2>
        <p>about template</p>
        <Link>Hello</Link>
      </section>
    </>
  )
}

export default AboutTemplate
