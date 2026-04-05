import { getPostsWithPagination, getAllPosts, buildSearchIndex } from "../../../lib/markdown"
import BlogListClient from "../blog-list-client"

export async function generateStaticParams() {
  const allPosts = await getAllPosts()
  const postsPerPage = 9
  const numPages = Math.ceil(allPosts.length / postsPerPage)

  // Generate params for pages 2+  (page 1 is handled by /blog/page.js)
  return Array.from({ length: numPages - 1 }, (_, i) => ({
    page: String(i + 2),
  }))
}

export async function generateMetadata({ params }) {
  const { page } = await params
  const pageNum = parseInt(page, 10)
  const { numPages } = await getPostsWithPagination(pageNum)
  return {
    title: `Blog — Page ${pageNum} of ${numPages}`,
    description: `Blog page ${pageNum} of ${numPages}`,
  }
}

export default async function BlogPaginatedPage({ params }) {
  const { page } = await params
  const pageNum = parseInt(page, 10)
  const { posts, numPages, currentPage } = await getPostsWithPagination(pageNum)
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
