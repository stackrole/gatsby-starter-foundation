/** @jsx jsx */
import { jsx } from "theme-ui"

const Header = ({ children }) => (
  <header
    className="site-header"
    sx={{
      bg: "siteColor",
    }}
  >
    {children}
  </header>
)

export default Header
