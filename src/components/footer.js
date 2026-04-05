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
        Made with{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        by <a href="https://dsnengr.com" target="_blank" rel="noopener noreferrer">dsnengr.com</a>
      </p>
    </div>
  </footer>
)

export default Footer
