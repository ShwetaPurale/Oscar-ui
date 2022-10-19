import { createTheme } from "@material-ui/core";


export const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#ffffff',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },

    components: {
        // Name of the component
        
        MuiSvgIcon: {
            styleOverrides: {
                // Name of the slot
                root: {
                  // Some CSS
                  fontSize: 'small',
                },
              },
        },
      },
    });
