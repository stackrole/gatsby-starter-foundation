import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation";

import "../assets/scss/style.scss"
import Footer from "./footer";

const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      siteTitle: title
    }
  }
}
`



const Layout = ({children }) => {

  const { site } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

  return (
    <>
      <Header>
        <Logo title={siteTitle} />
        <Navigation/>
      </Header>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout

