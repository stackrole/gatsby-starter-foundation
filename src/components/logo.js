"use client"
import Link from "next/link"

const Logo = (props) => (
  <div className="site-logo">
    <Link href="/">{props.title}</Link>
  </div>
)

export default Logo
