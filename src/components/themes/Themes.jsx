import { createTheme } from "@mui/material";

const themes = createTheme({
  palette: {
    primary: {
      main: "#91C73E",
    },
  },

  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
        minHeight: "xl",
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: ".8rem",
        padding: ".5rem, 1.4rem",
        textTransform: "capitalize",
        borderRadius: "40px",
        color: "#191919",
      },
    },
    defaultProps: {
      variant: "contained",
    },
  },
});

export default themes;
