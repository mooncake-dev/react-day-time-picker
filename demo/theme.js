const theme = {
  primary: 'gold',
  secondary: 'slategrey',
  background: '#111', // This should match the container background
  buttons: {
    disabled: {
      color: '#333',
      background: '#f0f0f0'
    },
    confirm: {
      color: '#fff',
      background: 'slategrey',
      hover: {
        color: '',
        background: 'lightslategrey'
      }
    }
  },
  feedback: {
    success: {
      color: '#29aba4'
    },
    failed: {
      color: '#eb7260'
    }
  }
};

export default theme;
