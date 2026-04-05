import ThemeProvider from "./theme-provider"
import "../src/assets/scss/style.scss"

import siteData from "../src/util/site.json"

export const metadata = {
  title: {
    default: siteData.meta.title,
    template: siteData.meta.titleTemplate,
  },
  description: siteData.meta.description,
  metadataBase: new URL(siteData.meta.siteUrl),
  openGraph: {
    title: siteData.meta.title,
    description: siteData.meta.description,
    url: siteData.meta.siteUrl,
    siteName: siteData.meta.title,
    images: [siteData.meta.image],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: siteData.meta.twitterUsername,
  },
  alternates: {
    languages: {
      "en-US": "/",
      en: "/",
      "x-default": "/",
    },
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
