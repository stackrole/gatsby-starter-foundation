/** @jsxImportSource theme-ui */
"use client"
import Link from "next/link"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"

import PostCard from "./post-card"

export default function BlogListHome({ posts }) {
  const postCards = posts
    .filter((post) => !!post.frontmatter.date)
    .map((post) => <PostCard key={post.id} data={post} />)
  return <PostMaker data={postCards} />
}

const PostMaker = ({ data }) => (
  <section className="home-posts">
    <h2>
      Latest in <strong>Blog</strong>{" "}
      <span className="icon -right">
        <RiArrowDownLine />
      </span>
    </h2>
    <div className="grids col-1 sm-2 lg-3">{data}</div>
    <Link
      className="button"
      href="/blog"
      sx={{
        variant: "variants.button",
      }}
    >
      See more
      <span className="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link>
  </section>
)
