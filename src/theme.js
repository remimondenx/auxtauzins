import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FFB300',
      },
      secondary: {
        main: '#FFFFFF'
      },
      textSecondary: {
        main: '#76ff03'
      }
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
      },
      h6: {
        fontFamily: 'Dancing Script',
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