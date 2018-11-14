import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
          main: '#FFEB3B',
      },
      secondary: {
          main: '#FFFFFF'
      },
    },
    typography: {
      body1: {
        fontFamily: 'Nunito',
        fontSize: '1em'
      },
      h3: {
        fontFamily: 'Nunito',
        textShadow: '2px 1px #444444',
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