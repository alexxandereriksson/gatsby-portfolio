import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/style.css"

import Header from "./Header"

const Layout = ({ children }) => (

  <>


    <Header />
    <main>{children}</main>

  </>
)

export default Layout
