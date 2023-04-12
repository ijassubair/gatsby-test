import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        <div className="nav-left-side">
          <Link className="header-link-home" to="/">
            Coding Style
          </Link>
        </div>
        <div className="nav-right-side">
          <Link className="header-link-home" to="/">
            Home
          </Link>{" "}
          <Link className="header-link-home" to="/about">
            About
          </Link>
          <Link className="header-link-home" to="/blog">
            Blog
          </Link>
        </div>

        {/* {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )} */}
      </header>

      <main className="layout-main-children">{children}</main>

      <footer>
        © {new Date().getFullYear()}, All rights reserved
       Coding Style
      </footer>
    </div>
  )
}

export default Layout
