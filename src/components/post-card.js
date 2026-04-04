/** @jsxImportSource theme-ui */
"use client"
import Link from "next/link"

const PostCard = ({ data }) => (
  <article
    className="post-card"
    sx={{
      bg: "cardBg",
    }}
  >
    {data.frontmatter.featuredImage ? (
      <Link href={data.frontmatter.slug}>
        <img
          src={data.frontmatter.featuredImage}
          alt={data.frontmatter.title + " - Featured image"}
          className="featured-image"
        />
      </Link>
    ) : (
      ""
    )}
    <div className="post-content">
      <h2 className="title">
        <Link
          href={data.frontmatter.slug}
          sx={{
            variant: "links.postLink",
          }}
        >
          {data.frontmatter.title}
        </Link>
      </h2>
      <p
        className="meta"
        sx={{
          color: "muted",
        }}
      >
        <time>{data.frontmatter.date}</time>
      </p>
    </div>
  </article>
)

export default PostCard
