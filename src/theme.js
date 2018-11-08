import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
          main: '#FFEB3B',
      },
      secondary: {
          main: '#424242'
      },
    },
    typography: {
      body1: {
        fontFamily: 'Source Sans Pro',
        fontSize: '1em'
      },
    },
})

export default theme;