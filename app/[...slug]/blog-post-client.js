/** @jsxImportSource theme-ui */
"use client"
import Link from "next/link"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"

import Layout from "../../src/components/layout"

const styles = {
  "article blockquote": {
    "background-color": "cardBg",
  },
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
  <div className="pagination -post" sx={styles.pagination}>
    <ul>
      {props.previous &&
        props.previous.frontmatter.template === "blog-post" && (
          <li>
            <Link href={props.previous.frontmatter.slug} rel="prev">
              <p
                sx={{
                  color: "muted",
                }}
              >
                <span className="icon -left">
                  <RiArrowLeftLine />
                </span>{" "}
                Previous
              </p>
              <span className="page-title">
                {props.previous.frontmatter.title}
              </span>
            </Link>
          </li>
        )}
      {props.next && props.next.frontmatter.template === "blog-post" && (
        <li>
          <Link href={props.next.frontmatter.slug} rel="next">
            <p
              sx={{
                color: "muted",
              }}
            >
              Next{" "}
              <span className="icon -right">
                <RiArrowRightLine />
              </span>
            </p>
            <span className="page-title">{props.next.frontmatter.title}</span>
          </Link>
        </li>
      )}
    </ul>
  </div>
)

export default function BlogPostClient({ post, previous, next, searchData }) {
  if (!post) return null
  const { frontmatter, html } = post

  return (
    <Layout className="page" searchData={searchData}>
      <article className="blog-post">
        <header className="featured-banner">
          <section className="article-header">
            <h1>{frontmatter.title}</h1>
            <time sx={{ color: "muted" }}>{frontmatter.date}</time>
          </section>
          {frontmatter.featuredImage ? (
            <img
              src={frontmatter.featuredImage}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image"
            />
          ) : (
            ""
          )}
        </header>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      {(previous || next) && <Pagination previous={previous} next={next} />}
    </Layout>
  )
}
