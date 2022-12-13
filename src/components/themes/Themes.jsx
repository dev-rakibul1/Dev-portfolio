import { createTheme } from "@mui/material";

const themes = createTheme({
  palette: {
    primary: {
      main: "#5200EE",
    },
  },

  components: {
    MuiContainer: {
      defaultProps: {
        // maxWidth: "lg",
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {},
    },
    defaultProps: {
      variant: "contained",
    },
  },
});

export default themes;
