import React from "react"

import "../assets/scss/header.scss"

const Header = ({children}) => (
  <header className="site-header">
    {children}
  </header>
)

export default Header