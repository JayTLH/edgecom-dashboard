import { useContext } from "react";

import * as Styled from "./App.styles";
import { ThemeProvider } from "./theme";
import { UserProvider, UserContext, ArticleProvider } from "./contexts";
import { Login, Dashboard } from "./pages";
import { combineProviders } from "./utils/combineProviders";

const CombinedProviders = combineProviders([ThemeProvider, ArticleProvider, UserProvider]);

export const Page = () => {
  const user = useContext(UserContext);

  return (
    <Styled.Background>
      {user.isLoading ? null : <Styled.Wrapper>{user.isLoggedIn ? <Dashboard /> : <Login />}</Styled.Wrapper>}
    </Styled.Background>
  );
};

export const App = () => {
  return (
    <CombinedProviders>
      <Page />
    </CombinedProviders>
  );
};
