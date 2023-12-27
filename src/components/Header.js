import React from "react"
import useMenu from "../hooks/use-menu"
import { Link } from "gatsby"

const Header = () => {
  const navbar = useMenu()
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark  customNavbar"

      >
        <a className="navbar-brand" href="http://localhost:8000/">
          AE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {navbar.map(({ node }, index) => (
              <li className="nav-item active" key={index}>
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
      </nav>
    </div>
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
