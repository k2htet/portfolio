import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2f2f2f",
    },
    secondary: {
      main: "#3f3f3f",
    },
    danger: {
      main: "#FE6F27",
    },
  },
  typography: {
    fontFamily: "Crimson Pro, serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Crimson Pro, serif",
          background: "#FE6F27",
          ":hover": {
            background: "#4f4f4f",
            fontWeight: "bold",
          },
          fontSize: "1rem",
          transitions: {
            duration: {
              standard: 500,
            },
          },
        },
      },
    },
  },
});

theme.typography.h2 = {
  fontSize: "1.5rem",
  color: "#fff",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.7rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "4rem",
  },
};

theme.typography.h3 = {
  fontSize: "1.5rem",
  color: "#fff",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "3rem",
  },
};

theme.typography.h5 = {
  fontSize: "1rem",
  color: "#fff",
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "2rem",
  },
};

theme.typography.h6 = {
  fontSize: "1.2rem",
  color: "white",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "1.8rem",
  },
};

theme.typography.p = {
  fontSize: "0.8rem",
  opacity: 0.7,
  lineHeight: "23px",
  [theme.breakpoints.up("md")]: {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "1.3rem",
  },
};
