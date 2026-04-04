import { getPostsWithPagination, buildSearchIndex } from "../../lib/markdown"
import BlogListClient from "./blog-list-client"

export async function generateMetadata() {
  const { numPages } = await getPostsWithPagination(1)
  return {
    title: `Blog — Page 1 of ${numPages}`,
    description: `Blog page 1 of ${numPages}`,
  }
}

export default async function BlogPage() {
  const { posts, numPages, currentPage } = await getPostsWithPagination(1)
  const searchData = buildSearchIndex()

  return (
    <BlogListClient
      posts={posts}
      numPages={numPages}
      currentPage={currentPage}
      searchData={searchData}
    />
  )
}
