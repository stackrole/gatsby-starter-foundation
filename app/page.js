import { getPageByTemplate, getAllPosts, buildSearchIndex } from "../lib/markdown"
import HomePageClient from "./home-client"

export default async function HomePage() {
  const pageData = await getPageByTemplate("index-page")
  const allPosts = await getAllPosts()
  const posts = allPosts.slice(0, 6)
  const searchData = buildSearchIndex()

  return (
    <HomePageClient
      pageData={pageData}
      posts={posts}
      searchData={searchData}
    />
  )
}
