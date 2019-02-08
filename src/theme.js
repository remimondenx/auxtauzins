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
      h3: {
        fontSize: '2.4em'
      }
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