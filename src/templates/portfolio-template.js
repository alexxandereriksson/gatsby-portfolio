import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
const Portfoliotemplate = contentfulPage => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjects(sort: { createdAt: ASC }) {
        edges {
          node {
            title
            projectDescription
            projectImage {
              gatsbyImageData(width: 560)
            }
          }
        }
      }
    }
  `)

  return (
    <div className="container">
      <h2 className="portfolioTitle textInfo">{contentfulPage.title}</h2>
      {data.allContentfulProjects.edges.map((edge, index) => {
        return (
          <div key={index}>
            <div className="row" style={{ marginBottom: "5rem" }}>
              <div className="col-sm-6">
                <div>
                  <GatsbyImage
                    alt={edge.node.title}
                    image={edge.node.projectImage.gatsbyImageData}
                  ></GatsbyImage>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="container textInfo textContent">
                  {edge.node.title}
                </div>
                <div className="container textContent portfolioText">
                  {edge.node.projectDescription}
                </div>
              </div>
            </div>
          </div>
        )
      })}
      {/* <div className="row" style={{ marginBottom: "5rem" }}>
        <div className="col-sm-6 ">
          <div className="loremImage"></div>
        </div>
        <div className="col-sm-6">
          <div className="container textInfo textContent">Lorem Resturant</div>
          <div className="container textContent portfolioText">
            {" "}
            En sida där man enkelt kan boka bord och mat för att sedan anlända
            och njuta at sin middag. Grupprojekt för våran kurs i javascript med
            ramverk. Byggd med Vue.js, vite, node.js, CSS{" "}
          </div>
        </div>
      </div>
      <div className="row" style={{ marginBottom: "5rem" }}>
        <div className="col">
          <div className="sunImage"></div>
        </div>
        <div className="col">
          <div className="container textInfo textContent"> Sunshine Villa</div>
          <div className="container textContent portfolioText">
            {" "}
            Sunshine villa B&B är en webbplats där man kan boka hotellnätter för
            sin semester. Slutprojekt i kursen HTML&CSS, där syftet var att
            bygga en statisk sida. Här användes flex och grid för layout av
            sidan. Byggd med HTML & CSS.{" "}
          </div>
        </div>
      </div>
      <div className="row" style={{ marginBottom: "5rem" }}>
        <div className="col">
          <div className="shoeImage"></div>
        </div>
        <div className="col">
          <div className="container textInfo textContent"> Shoeman</div>
          <div className="container textContent portfolioText">
            {" "}
            Shoeman är en fiktiv e-handel sida för sneakers älskare. Shoeman är
            ett projekt ifrån våran UX/UI kurs. Där syftet var att designa en
            e-handels produkt. Byggd och designad i Figma.{" "}
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Portfoliotemplate
