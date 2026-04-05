/** @jsxImportSource theme-ui */
"use client"
import Link from "next/link"
import {
  RiArrowRightSLine,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiRssFill,
  RiGithubFill,
  RiTelegramFill,
  RiPinterestFill,
  RiSnapchatFill,
  RiSkypeFill,
  RiDribbbleFill,
  RiMediumFill,
  RiBehanceFill,
} from "react-icons/ri"
import { FaTiktok, FaWordpress, FaVk } from "react-icons/fa"

import Layout from "../src/components/layout"
import BlogListHome from "../src/components/blog-list-home"
import Icons from "../src/util/socialmedia.json"

const iconMap = {
  facebook: RiFacebookBoxFill,
  twitter: RiTwitterFill,
  linkedin: RiLinkedinBoxFill,
  youtube: RiYoutubeFill,
  instagram: RiInstagramFill,
  rss: RiRssFill,
  github: RiGithubFill,
  telegram: RiTelegramFill,
  pinterest: RiPinterestFill,
  snapchat: RiSnapchatFill,
  skype: RiSkypeFill,
  wordpress: FaWordpress,
  tiktok: FaTiktok,
  dribbble: RiDribbbleFill,
  medium: RiMediumFill,
  behance: RiBehanceFill,
  vk: FaVk,
}

export default function HomePageClient({ pageData, posts, searchData }) {
  if (!pageData) return null
  const { frontmatter, html } = pageData

  const sIcons = Icons.socialIcons.map((icons, index) => {
    const IconComponent = iconMap[icons.icon]
    if (!IconComponent) return null
    return (
      <div key={"social icons" + index}>
        <a
          href={icons.url}
          target="_blank"
          aria-label={`link to ${icons.icon}`}
          rel="noopener noreferrer"
        >
          <IconComponent />
        </a>
      </div>
    )
  })

  return (
    <Layout searchData={searchData}>
      <div className="home-banner grids col-1 sm-2">
        <div>
          <h1 className="title">{frontmatter.title}</h1>
          <p
            className="tagline"
            sx={{
              color: "muted",
            }}
          >
            {frontmatter.tagline}
          </p>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Link
            href={frontmatter.cta.ctaLink}
            className="button"
            sx={{
              variant: "variants.button",
            }}
          >
            {frontmatter.cta.ctaText}
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>
          </Link>
          <div
            className="social-icons"
            sx={{
              variant: "variants.socialIcons",
            }}
          >
            {sIcons}
          </div>
        </div>
        <div>
          {frontmatter.featuredImage ? (
            <img
              src={frontmatter.featuredImage}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image"
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <BlogListHome posts={posts} />
    </Layout>
  )
}
