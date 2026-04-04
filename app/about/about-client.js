"use client"

import Layout from "../../src/components/layout"

export default function AboutPageClient({ pageData, searchData }) {
  if (!pageData) return null
  const { frontmatter, html } = pageData

  return (
    <Layout className="page" searchData={searchData}>
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}
