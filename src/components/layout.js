/** @jsxImportSource theme-ui */
"use client"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation"

import Footer from "./footer"
import Theme from "../components/theme"
import Search from "../components/search"

import siteData from "../util/site.json"

const Layout = ({ children, className, searchData }) => {
  const siteTitle = siteData.meta.title

  return (
    <div className="primary-container">
      <Header>
        <Logo title={siteTitle} />
        <div sx={layoutStyle.nav}>
          <div sx={{ display: ["flex", "flex", "flex", "none"] }}>
            <Search searchData={searchData} />
          </div>
          <Navigation />
        </div>
        <div sx={layoutStyle.appearance}>
          <Search searchData={searchData} />
          <Theme />
        </div>
      </Header>
      <main className={"container " + (className || "")}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

const layoutStyle = {
  appearance: {
    display: ["none", "none", "none", "flex"],
    alignItems: "center",
    gap: 4,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
}
