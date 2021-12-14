import { ApolloProvider, useReactiveVar } from '@apollo/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { client, isAuthVar } from './apollo';
import { routes } from './routes';
import { NotFound, Login, CreateAccount, Home } from './screens';

function App() {
  const isAuth = useReactiveVar(isAuthVar);

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={isAuth ? <Home /> : <Login />} />
          <Route
            path={routes.createAccount}
            element={
              !isAuth ? <CreateAccount /> : <Navigate replace to={'/'} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
