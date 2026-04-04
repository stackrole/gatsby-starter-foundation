import { getAllPosts, getPostBySlug, getAdjacentPosts, buildSearchIndex } from "../../lib/markdown"
import BlogPostClient from "./blog-post-client"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => {
    // Remove leading slash and split into segments
    const slug = post.frontmatter.slug.replace(/^\//, "")
    return { slug: slug.split("/") }
  })
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const slugPath = "/" + slug.join("/")
  const post = await getPostBySlug(slugPath)

  if (!post) return { title: "Not Found" }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description || post.excerpt,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description || post.excerpt,
      type: "article",
      images: post.frontmatter.featuredImage ? [post.frontmatter.featuredImage] : [],
    },
    twitter: {
      title: post.frontmatter.title,
      description: post.frontmatter.description || post.excerpt,
      images: post.frontmatter.featuredImage ? [post.frontmatter.featuredImage] : [],
    },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const slugPath = "/" + slug.join("/")
  const post = await getPostBySlug(slugPath)

  if (!post) {
    notFound()
  }

  const { previous, next } = await getAdjacentPosts(slugPath)
  const searchData = buildSearchIndex()

  return (
    <BlogPostClient
      post={post}
      previous={previous}
      next={next}
      searchData={searchData}
    />
  )
}
