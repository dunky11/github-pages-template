import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import config from "./config";

const theme = createMuiTheme({
  palette: {
    primary: { main: config.theme.primaryColor },
    secondary: { main: config.theme.secondaryColor },
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  },
  typography: {
    useNextVariants: true
  }
});

export default theme;
