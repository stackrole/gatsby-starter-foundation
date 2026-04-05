/** @jsxImportSource theme-ui */
"use client"
import { RiSendPlane2Line } from "react-icons/ri"

import Layout from "../../src/components/layout"

const contactStyles = {
  contactPage: {
    input: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      outline: "none",
    },
    textarea: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      outline: "none",
    },
  },
}

export default function ContactPageClient({ pageData, searchData }) {
  if (!pageData) return null
  const { frontmatter, html } = pageData

  return (
    <Layout className="contact-page" searchData={searchData}>
      <div className="wrapper" sx={contactStyles.contactPage}>
        <h1>{frontmatter.title}</h1>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <form
          className="contact-form"
          action="/thanks"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Name
              <input type="text" name="name" required />
            </label>
          </p>
          <p>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
          </p>
          <p>
            <label>
              Subject
              <input type="text" name="subject" required />
            </label>
          </p>
          <p>
            <label>
              Message<textarea name="message" required></textarea>
            </label>
          </p>
          <p className="text-align-right">
            <button
              className="button"
              sx={{
                variant: "variants.button",
              }}
              type="submit"
            >
              Send Message{" "}
              <span className="icon -right">
                <RiSendPlane2Line />
              </span>
            </button>
          </p>
        </form>
      </div>
    </Layout>
  )
}
