/** @jsxImportSource theme-ui */
"use client"

const Header = ({ children }) => (
  <header
    className="site-header"
    sx={{
      bg: "siteColor",
    }}
  >
    {children}
  </header>
)

export default Header
