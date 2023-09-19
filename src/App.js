import * as Styled from "./App.styled";
import { Login, Dashboard } from "./pages";
import { ThemeProvider } from "./theme";
import { UserProvider } from "./contexts";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Styled.Background>
          <Styled.Wrapper>
            <Login />
          </Styled.Wrapper>
        </Styled.Background>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
