import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "../css/style.css"

import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
export default Layout
