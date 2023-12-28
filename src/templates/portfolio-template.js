import React from "react"

const Portfoliotemplate = contentfulPage => {
  return (
    <div class="container">
      <h2 className="portfolioTitle textInfo">{contentfulPage.title}</h2>

      <div class="row" style={{ marginBottom: "5rem" }}>
        <div class="col-sm-6 ">
          <div className="loremImage"></div>
        </div>
        <div class="col-sm-6">
          <div className="container textInfo textContent">
            {" "}
            Lorem Ipsum resturang
          </div>
          <div className="container textContent portfolioText">
            {" "}
            En sida där man enkelt kan boka bord och mat för att sedan anlända
            och njuta at sin middag. Grupprojekt för våran kurs i javascript med
            ramverk. Byggd med Vue.js, vite, node.js, CSS{" "}
          </div>
        </div>
      </div>
      <div class="row" style={{ marginBottom: "5rem" }}>
        <div class="col">
          <div className="sunImage"></div>
        </div>
        <div class="col">
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
      <div class="row" style={{ marginBottom: "5rem" }}>
        <div class="col">
          <div className="shoeImage"></div>
        </div>
        <div class="col">
          <div className="container textInfo textContent"> Shoeman</div>
          <div className="container textContent portfolioText">
            {" "}
            Shoeman är en fiktiv e-handel sida för sneakers älskare. Shoeman är
            ett projekt ifrån våran UX/UI kurs. Där syftet var att designa en
            e-handels produkt. Byggd och designad i Figma.{" "}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfoliotemplate
