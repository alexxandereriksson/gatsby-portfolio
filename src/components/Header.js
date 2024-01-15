import React from "react"
import useMenu from "../hooks/use-menu"
import { Link } from "gatsby"

const Header = () => {
  const navbar = useMenu()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  customNavbar">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {navbar.map(({ node }, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={node.url}>
                  {node.title}
                </Link>
              </li>
            ))}
            <li className="nav-item active">
              <Link className="nav-link" to={"/kurser"}>
                Kompetenser
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
{
  /* <nav>
<ul>
  {navbar.map(({node}, index) => (
    <li key={index}>
      <Link to={node.url}>{node.title}</Link>
    </li>
  ))}
</ul>
</nav> */
}
{/* <nav className="navbar navbar-expand-lg bg-warning">
<div className="container-fluid">
  <a className="navbar-brand" href="index.html">
    Friskvård.se
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      {topNavigation.map(nav => {
        return (
          <li className="nav-item" key={nav.node.id}>
            <Link to={`${nav.node.url}`}>{nav.node.titlepage}</Link>
          </li>
        )
      })}
    </ul>
  </div>
</div>
</nav> */}
