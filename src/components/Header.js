import React from "react"
import useMenu from "../hooks/use-menu"
import { Link } from "gatsby"
import Logo from "../images/A-Logo.png"

const Header = () => {
    // hämtar in min useMenu hook och sätter den till variabeln navbar som jag sedan mapar ut i min meny
  const navbar = useMenu()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  customNavbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={Logo}
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
        </Link>
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
                {/* Om node.url inte är lika med "/404", kommer resten av min menu att renderas. Gör detta för att dölja min 404 från menyn. */}
                {node.url !== "/404" && (
                  <Link className="nav-link" to={node.url}>
                    {node.title}
                  </Link>
                )}
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
