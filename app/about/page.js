import { getPageByTemplate, buildSearchIndex } from "../../lib/markdown"
import AboutPageClient from "./about-client"

export async function generateMetadata() {
  const pageData = await getPageByTemplate("about-page")
  return {
    title: pageData?.frontmatter?.title,
    description: pageData?.excerpt,
  }
}

export default async function AboutPage() {
  const pageData = await getPageByTemplate("about-page")
  const searchData = buildSearchIndex()

  return <AboutPageClient pageData={pageData} searchData={searchData} />
}
