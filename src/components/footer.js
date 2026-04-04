/** @jsxImportSource theme-ui */
"use client"
import Link from "next/link"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        A GatsbyJS Starter for Netlify CMS, Made with{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        by <Link href="/">Stackrole.com</Link>
      </p>
    </div>
  </footer>
)

export default Footer
