import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    primary: { main: '#EEEEEE' },
    secondary: { main: '#00aeff' },
    success: { main: '#5daf5d' },
    text: {
      primary: '#EEEEEE',
      secondary: '#00aeff',
      disabled: '#555555',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#222831',
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          color: '#eeeeee',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            color: '#999999',
          },
          '& label.Mui-focused': {
            color: '#00aeff',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#555555',
            },
            '&:hover fieldset': {
              borderColor: '#dddddd',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00aeff',
            },
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: '#999999',
            backgroundColor: '#393e46',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#eeeeee',
          backgroundColor: '#393e46',
          '&:hover': {
            color: '#00aeff',
            backgroundColor: '#555555',
          },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: '.8rem',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#555555',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#393e46',
          '&:hover': {
            backgroundColor: '#555555',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&:before': {
            borderBottom: '2px solid #555555',
          },
          '&:after': {
            borderBottom: '2px solid #00aeff',
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          color: '#eeeeee',
          backgroundColor: '#393e46',
          '&.Mui-disabled': {
            color: '#999999',
            backgroundColor: '#393e46',
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: '#eeeeee',
          backgroundColor: '00aeff',
          '&.Mui-selected': {
            color: '#222831',
            backgroundColor: '#00aeff',
            ':hover': {
              backgroundColor: '#00aeff',
            },
          },
          '&.Mui-disabled': {
            color: '#999999',
            backgroundColor: '#393e46',
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        padding: {
          paddingTop: 4,
          paddingBottom: 4,
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          '& .MuiAccordionSummary-content': {
            margin: '0px',
          },
          '& .MuiAccordionSummary-content.Mui-expanded': {
            margin: '0px',
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          paddingTop: '4px',
          paddingBottom: '8px',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: '#eeeeee',
        },
      },
    },
  },
});
