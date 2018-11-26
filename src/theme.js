import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
          main: '#FFB300',
      },
      secondary: {
          main: '#FFFFFF'
      },
    },
    typography: {
      useNextVariants: true,
      body1: {
        fontFamily: 'Nunito',
      },
      h2: {
        fontFamily: 'Dancing Script',
      },
      h3: {
        fontFamily: 'Nunito',
      },
      h4: {
        fontFamily: 'Nunito',
      },
      h5: {
        fontFamily: 'Dancing Script',
        fontSize: '1.8em',
      }
    },
    overrides: {
      MuiButton: {
        root: {
          fontFamily: 'Nunito',
          fontStyle: 'italic',
          fontWeight: 'bold',
        }
      }
    }
})

export default theme;