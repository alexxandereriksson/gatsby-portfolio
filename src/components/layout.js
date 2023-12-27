import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/style.css"
import { Link } from "gatsby"
import Header from "./Header"

const Layout = ({ children }) => (

  <>
    <header>
      <Link to="/">Gatsby ITHS-starter</Link>
    </header>
    <header>
      <Link to="/kurser">Mina kurser</Link>
    </header>
    <Header />
    <main>{children}</main>
    <footer>Footer</footer>
   
  </>
)

export default Layout
