import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

//i dev mode overridas denna sida av en inbyggd 404-sida
const NotFoundPage = () => (
  <Layout>
    <div className="container text-center"style={{ marginTop: "5rem" }}>
      {" "}
      <h1>404: Sidan hittades inte</h1>
      <h2>Sidan du försöker gå till existerar inte. </h2>
    </div>
    <div className=" container button" style={{ marginTop: "5rem" }}>
      <Link to="/">Tillbaka till förstasidan</Link>
    </div>
  </Layout>
)

export const Head = () => <title>Portfolio Page</title>

export default NotFoundPage

// f. 404-sida
// Med lämpligt felmeddelande (som användaren förstår) och länk till
// startsidan
