import { ThemeProvider } from "@mui/material";

import { theme } from "./theme";
import { Login, Dashboard } from "./pages";
import * as Styled from "./App.styled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Styled.Background>
        <Styled.Wrapper>
          <Login />
        </Styled.Wrapper>
      </Styled.Background>
    </ThemeProvider>
  );
}

export default App;
