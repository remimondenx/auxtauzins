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
        fontFamily: 'Nunito',
        fontSize: '1em'
      },
      h4: {
        fontFamily: 'Nunito',
      }
    },
    overrides: {
      MuiButton: {
        root: {
          fontFamily: 'Nunito',
          fontStyle: 'italic',
          fontWeight: 'bold'
        }
      }
    }
})

export default theme;