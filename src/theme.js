import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#FFFFFF'
      },
      textSecondary: {
        main: '#76ff03'
      }
    },
    typography: {
      fontFamily: "Quicksand",
      useNextVariants: true,
    },
    overrides: {
      MuiButton: {
        root: {
          fontFamily: 'Quicksand',
          fontStyle: 'italic',
          fontWeight: 'bold',
        }
      },
    }
})

export default theme;