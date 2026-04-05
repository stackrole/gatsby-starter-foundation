import { getPageByTemplate, buildSearchIndex } from "../../lib/markdown"
import ContactPageClient from "./contact-client"

import siteData from "../../src/util/site.json"

export async function generateMetadata() {
  const pageData = await getPageByTemplate("contact-page")
  return {
    title: pageData?.frontmatter?.title,
    description: `${pageData?.frontmatter?.title} ${siteData.meta.title}`,
  }
}

export default async function ContactPage() {
  const pageData = await getPageByTemplate("contact-page")
  const searchData = buildSearchIndex()

  return <ContactPageClient pageData={pageData} searchData={searchData} />
}
