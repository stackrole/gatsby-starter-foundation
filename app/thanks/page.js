"use client"
import Link from "next/link"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"

import Layout from "../../src/components/layout"

export default function Thanks() {
  return (
    <Layout className="thanks-page">
      <div
        className="wrapper"
        style={{
          textAlign: "center",
        }}
      >
        <RiCheckboxCircleLine
          style={{
            fontSize: "128px",
            color: "var(--primary-color)",
          }}
        />
        <h1>Got your message</h1>
        <p>Thank you for getting in touch us. We will get back to you shortly.</p>
        <Link href="/" className="button">
          <RiArrowLeftSLine className="icon -left" />
          Lets go back to Homepage
        </Link>
      </div>
    </Layout>
  )
}
