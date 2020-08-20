export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#5C2941',
    accent: '#fff',
    muted: 'rgba(0, 0, 0, 0.7)',
    cardBg: '#fff',
    modes: {
      dark: {
        text: '#f5f5f5',
        background: '#111',
        primary: '#252525',
        accent: '#5C2941',
        muted: 'rgba(255, 255, 255, 0.7)',
        buttonAccent: '#fff',
        cardBg: '#252525'
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