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
      useNextVariants: true,
      body1: {
        fontFamily: 'Nunito',
      },
      h3: {
        fontFamily: 'Nunito',
      },
      h4: {
        fontFamily: 'Nunito',
      },
      h5: {
        fontFamily: 'Nunito',
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