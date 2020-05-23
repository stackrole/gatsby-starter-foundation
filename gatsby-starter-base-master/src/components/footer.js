import React from "react"
import {Link} from "gatsby"

import "../assets/scss/footer.scss"

const Footer = () => (
  <footer className="wrapper site-footer">
    <p>A Gatsby + Netlify CMS starter by <Link to="/"><b>Stackrole.com</b></Link></p>
  </footer>
)

export default Footer