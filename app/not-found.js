"use client"
import Link from "next/link"
import { RiArrowLeftSLine, RiBugLine, RiSkullLine } from "react-icons/ri"

import Layout from "../src/components/layout"

export default function NotFound() {
  return (
    <Layout className="not-found-page">
      <div
        className="wrapper"
        style={{
          textAlign: "center",
        }}
      >
        <header>
          <RiSkullLine
            style={{
              fontSize: "128px",
              color: "var(--primary-color)",
            }}
          />
          <h1>Oops we did not expect that to happen</h1>
          <p>
            Have you wondered into the unknow. Let us help you, Please take a look
            at below options
          </p>
        </header>
        <Link href="/" className="button">
          <RiArrowLeftSLine className="icon -left" />
          Back to Homepage
        </Link>
        <Link href="/contact" className="button -outline">
          Report this <RiBugLine className="icon -right" />
        </Link>
      </div>
    </Layout>
  )
}
