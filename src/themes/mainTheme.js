import { createMuiTheme } from "@material-ui/core";

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#EDF5E1",
      main: "#15558D",
      dark: "teal",
      contrastText: "#09DCA4",
    },
    secondary: {
      light: "#09DCA4",
      main: "#20C0F3",
      dark: "#15558D",
      contrastText: "#EDF5E1",
      //contrastText: "#09DCA4",
    },
  },
});

export default mainTheme;
