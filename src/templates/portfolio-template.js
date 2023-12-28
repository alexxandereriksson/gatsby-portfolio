import React from "react"

const Portfoliotemplate = contentfulPage => {
  return (
    <section class="container">
      <h2>{contentfulPage.title}</h2>
      <p>Mina projekt</p>
      <div class="row">
        <div class="col">
          <div className="loremImage"></div>
        </div>
        <div class="col">2 of 2 <div className="loremImage"></div></div>
      </div>
    </section>
  )
}

export default Portfoliotemplate
