import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import gfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypePrism from "rehype-prism-plus"
import rehypeStringify from "rehype-stringify"

const contentDir = path.join(process.cwd(), "src/content")
const postsDir = path.join(contentDir, "posts")
const pagesDir = path.join(contentDir, "pages")

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  })
}

async function markdownToHtml(markdown) {
  const result = await remark()
    .use(gfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrism, { ignoreMissing: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown)
  return result.toString()
}

function processImagePaths(htmlContent) {
  // Convert /assets/ paths to work with public directory
  return htmlContent.replace(/src="\/assets\//g, 'src="/assets/')
}

export async function getAllPosts() {
  const files = fs.readdirSync(postsDir)
  const posts = []

  for (const file of files) {
    if (!file.endsWith(".md")) continue
    const filePath = path.join(postsDir, file)
    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContents)

    if (data.template !== "blog-post") continue

    const htmlContent = await markdownToHtml(content)
    const excerpt = content.replace(/[#*\[\]`>_~\-!]/g, "").slice(0, 250).trim()

    posts.push({
      id: file,
      slug: data.slug,
      html: processImagePaths(htmlContent),
      excerpt,
      frontmatter: {
        ...data,
        date: data.date ? formatDate(data.date) : null,
        featuredImage: data.featuredImage || null,
      },
    })
  }

  // Sort by date descending
  posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date)
    const dateB = new Date(b.frontmatter.date)
    return dateB - dateA
  })

  return posts
}

export async function getPostBySlug(slug) {
  const posts = await getAllPosts()
  // slug may or may not have leading /
  const normalizedSlug = slug.startsWith("/") ? slug : `/${slug}`
  return posts.find((p) => p.slug === normalizedSlug || p.frontmatter.slug === normalizedSlug)
}

export async function getPageByTemplate(template) {
  const files = fs.readdirSync(pagesDir)

  for (const file of files) {
    if (!file.endsWith(".md")) continue
    const filePath = path.join(pagesDir, file)
    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContents)

    if (data.template !== template) continue

    const htmlContent = await markdownToHtml(content)
    const excerpt = content.replace(/[#*\[\]`>_~\-!]/g, "").slice(0, 140).trim()

    return {
      html: processImagePaths(htmlContent),
      excerpt,
      frontmatter: data,
    }
  }

  return null
}

export async function getPostsWithPagination(page, postsPerPage = 9) {
  const allPosts = await getAllPosts()
  const numPages = Math.ceil(allPosts.length / postsPerPage)
  const skip = (page - 1) * postsPerPage
  const posts = allPosts.slice(skip, skip + postsPerPage)

  return {
    posts,
    numPages,
    currentPage: page,
  }
}

export async function getAdjacentPosts(slug) {
  const allPosts = await getAllPosts()
  const normalizedSlug = slug.startsWith("/") ? slug : `/${slug}`
  const index = allPosts.findIndex(
    (p) => p.slug === normalizedSlug || p.frontmatter.slug === normalizedSlug
  )

  return {
    previous: index < allPosts.length - 1 ? allPosts[index + 1] : null,
    next: index > 0 ? allPosts[index - 1] : null,
  }
}

export function buildSearchIndex() {
  const files = fs.readdirSync(postsDir)
  const documents = []

  for (const file of files) {
    if (!file.endsWith(".md")) continue
    const filePath = path.join(postsDir, file)
    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data } = matter(fileContents)

    if (data.tags === "exempt") continue

    documents.push({
      id: file,
      title: data.title,
      template: data.template,
      slug: data.slug,
    })
  }

  return documents
}
