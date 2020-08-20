import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useColorMode } from 'theme-ui'

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

const Layout = ({children, className, props}) => {

  const { site } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata
  const [colorMode, setColorMode] = useColorMode()

  return (
    <div className="primary-container">
      <Header>
        <Logo title={siteTitle} />
        <Navigation/>
        <button
          onClick={e => {
            setColorMode(colorMode === 'default' ? 'dark' : 'default')
          }}>
          Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
        </button>
      </Header>
      <main className={"container " + className}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout

