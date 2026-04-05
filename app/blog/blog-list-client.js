/** @jsxImportSource theme-ui */
"use client"
import Link from "next/link"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import Layout from "../../src/components/layout"
import PostCard from "../../src/components/post-card"

const styles = {
  pagination: {
    a: {
      color: "muted",
      "&.is-active": {
        color: "text",
      },
      "&:hover": {
        color: "text",
      },
    },
  },
}

const Pagination = (props) => (
  <div className="pagination" sx={styles.pagination}>
    <ul>
      {!props.isFirst && (
        <li>
          <Link href={props.prevPage} rel="prev">
            <span className="icon -left">
              <RiArrowLeftLine />
            </span>{" "}
            Previous
          </Link>
        </li>
      )}
      {Array.from({ length: props.numPages }, (_, i) => (
        <li key={`pagination-number${i + 1}`}>
          <Link
            href={`/blog/${i === 0 ? "" : i + 1}`}
            className={props.currentPage === i + 1 ? "is-active num" : "num"}
          >
            {i + 1}
          </Link>
        </li>
      ))}
      {!props.isLast && (
        <li>
          <Link href={props.nextPage} rel="next">
            Next{" "}
            <span className="icon -right">
              <RiArrowRightLine />
            </span>
          </Link>
        </li>
      )}
    </ul>
  </div>
)

export default function BlogListClient({ posts, numPages, currentPage, searchData }) {
  if (!posts) return null
  const blogSlug = "/blog/"
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? blogSlug : blogSlug + (currentPage - 1).toString()
  const nextPage = blogSlug + (currentPage + 1).toString()

  const postCards = posts
    .filter((post) => !!post.frontmatter.date)
    .map((post) => <PostCard key={post.id} data={post} />)

  const paginationProps = {
    isFirst,
    prevPage,
    numPages,
    blogSlug,
    currentPage,
    isLast,
    nextPage,
  }

  return (
    <Layout className="blog-page" searchData={searchData}>
      <h1>Blog</h1>
      <div className="grids col-1 sm-2 lg-3">{postCards}</div>
      <Pagination {...paginationProps} />
    </Layout>
  )
}
