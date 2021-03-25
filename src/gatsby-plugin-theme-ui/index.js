const theme = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#5C2941',
    accent: '#fff',
    muted: 'rgba(0, 0, 0, 0.7)',
    cardBg: '#fff',
    borderColor:"#540229",
    labelText: "#777",
    inputBorder: "#aaa",
    inputBackground: "#fff",
    socialIcons:"#a8959e",
    socialIconsHover:"#5c2941",
    modes: {
      dark: {
        text: '#f5f5f5',
        background: '#111',
        primary: '#252525',
        accent: '#5C2941',
        muted: 'rgba(255, 255, 255, 0.7)',
        buttonAccent: '#fff',
        cardBg: '#252525',
        borderColor:"#888",
        labelText: "#777",
        inputBorder: "#777",
        inputBackground: "#333",
        socialIcons:"rgba(255,255,255,0.7)",
        socialIconsHover:"#fff",
      },
    }
  },
  links: {
    postLink: {
      color: 'muted',
      '&:hover': {
        color: 'text'
      }
    },
    button: {
      bg: 'buttonAccent',
      color: 'accent'
    }
  }
}

export default theme