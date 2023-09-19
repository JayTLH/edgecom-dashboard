import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const theme = createTheme({
  palette: {
    primary: { main: "#272727" },
    secondary: { main: "#ededed" },
    error: { main: "#bf3b32" },
    warning: { main: "#ffa726" },
    info: { main: "#29b6f6" },
    success: { main: "#66bb6a" },
  },
});

export const ThemeProvider = ({ children }) => <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
