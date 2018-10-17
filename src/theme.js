import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
          main: '#FFCA28',
      },
      secondary: {
          main: '#f44336'
      },
    },
    typography: {
      body1: {
          color: '00ff00',
      },
    },
})

export default theme;