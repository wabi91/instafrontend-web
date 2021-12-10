import { ThemeProvider } from 'styled-components';
import { useReactiveVar } from '@apollo/client';

import { darkThemeVar, loggedInVar } from './apollo';
import Router from './Router';
import GlobalStyle from './styles/global';
import { darkTheme, lightTheme } from './styles/theme';

const App = () => {
  const isLoggedIn = useReactiveVar(loggedInVar);
  const isDarkMode = useReactiveVar(darkThemeVar);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router isLoggedIn={isLoggedIn} isDarkMode={isDarkMode} />
    </ThemeProvider>
  );
};

export default App;
