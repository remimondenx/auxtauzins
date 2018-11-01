import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
          main: '#FFEB3B',
      },
      secondary: {
          main: '#f44336'
      },
    },
    typography: {
      body1: {
          color: '00ff00',
          fontFamily: 'Source Sans Pro',
          fontSize: '1em'
      },
    },
})

export default theme;