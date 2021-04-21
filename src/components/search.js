/** @jsx jsx */
import { jsx } from "theme-ui"
import { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import { RiSearchLine } from "react-icons/ri"

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = { showSearch: false }
    this.handleToggleClick = this.handleToggleClick.bind(this)
    this.state = {
      query: ``,
      results: [],
    }
  }

  handleToggleClick() {
    this.setState(state => ({
      showSearch: !state.showSearch,
    }))
  }

  render() {
    return (
      <div sx={searchStyle.searchField}>
        <div>
          <button
            onClick={this.handleToggleClick}
            className={this.state.showSearch ? "search is-active" : "search"}
          >
            <RiSearchLine />
          </button>
          <div sx={searchStyle.search} className="search-container">
            <input
              type="text"
              placeholder="Search"
              value={this.state.query}
              onChange={this.search}
              className="search-input"
            />
            <ul sx={searchStyle.searchResults}>
              {this.state.results.map(page => (
                <li key={page.id}>
                  {page.template === "blog-post" ? (
                    <Link to={page.slug}>{page.title}</Link>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  getOrCreateIndex = () =>
    this.index ? this.index : Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      results: this.index
        .search(query, {})
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}

const searchStyle = {
  searchResults: {
    borderRadius: "0 0 6px 6px",
    display: "none",
  },
  searchField: {
    zIndex: "11111",
    button: {
      p: 0,
      fontSize: "25px",
      bg: "transparent",
      border: "none",
      display: "flex",
      alignItems: "center",
      color: "#fff",
      cursor: "pointer",
    },
    position: ["none", "relative"],
    ".search-container": {
      display: "none",
      position: "absolute",
      top: ["85px", "55px", "55px", "60px"],
      borderRadius: "12px",
      width: ["100%", "auto"],
      zIndex: "1111",
      textAlign: "center",
      overflow: "hidden",
      boxShadow:
        "0px 0px 50px 0px rgba(0,0,0,.1), 0px 0px 1px 1px rgba(0,0,0,.1)",
    },
    ".search-input": {
      bg: "#fff",
      color: "#000",
      borderRadius: "0",
      boxShadow: "none",
      border: "none",
    },
    ".search": {
      cursor: "pointer",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      "&:hover, &:focus": {
        color: "rgba(255, 255, 255, 0.8)",
      },
      "&.is-active": {
        color: "rgba(255, 255, 255, 0.8)",
        position: "relative",
        zIndex: 1112,
        "+ .search-container": {
          display: ["block"],
          position: "absolute",
          right: 0,
          animation: "animation 0.3s",
          transition: "linear transform .3s",
          transformOrigin: "top right",
          transform: "scale(1)",
          opacity: 1,
          "@keyframes animation": {
            "0%": {
              opacity: 0,
              transform: "scale(0)",
            },
            "50%": {
              transform: "scale(1)",
            },
            "100%": {
              opacity: 1,
              transform: "scale(1)",
            },
          },
          input: {
            width: ["100%", "300px"],
            maxWidth: "100",
            outline: "none",
            fontSize: "16px",
            p: 3,
            borderBottom: "1px solid #eee",
          },
          ul: {
            display: "block",
            bg: "#fff",
            pl: 0,
            m: 0,
          },
          "ul > li": {
            listStyle: "none",
            textAlign: "left",
          },
          "ul > li > a": {
            display: "block",
            color: "#000",
            p: 3,
            "&:hover": {
              color: "#9b9b9b",
            },
          },
        },
      },
    },
  },
}
