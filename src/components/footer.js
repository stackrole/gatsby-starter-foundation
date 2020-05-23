import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

import "../assets/scss/footer.scss"

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>A GatsbyJS Starter for Netlify CMS, Made with <span className="icon -love"><RiHeart2Line/></span> by <Link to="/"><b>Stackrole.com</b></Link></p>
    </div>
  </footer>
)

export default Footer