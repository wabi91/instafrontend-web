import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';
import { routes } from './routes';

const TOKEN = 'test_token';

export const isDarkModeVar = makeVar(false);
export const isAuthVar = makeVar(Boolean(localStorage.getItem(TOKEN)));
export const logUserIn = (token: string) => {
  localStorage.setItem(TOKEN, token);
  isAuthVar(true);
};
export const logUserOut = (navigate: any) => {
  localStorage.removeItem(TOKEN);
  navigate(routes.home, {
    state: null,
  });
  window.location.reload();
};

export const client = new ApolloClient({
  uri: 'https://instaclone-backend-wabi.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});
