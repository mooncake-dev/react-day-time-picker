// NOTE: currently not passed as prop
const theme = {
  primary: 'gold',
  secondary: 'slategrey',

  // This should match the container background
  // Text color is inherited from the container
  background: '#333',

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
