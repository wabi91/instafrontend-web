import styled from 'styled-components';

import { darkThemeVar, loggedInVar } from '../apollo';

const Title = styled.h1`
  color: ${({ theme }) => theme.fontColor};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Conatiner = styled.div``;

const Login = () => {
  const handleLogin = () => {
    loggedInVar(true);
  };
  const changeToDark = () => {
    darkThemeVar(true);
  };
  const changeToLight = () => {
    darkThemeVar(false);
  };

  return (
    <Conatiner>
      <Title>Login plz</Title>
      <button onClick={handleLogin}>Login</button>
      <button onClick={changeToDark}>Dark</button>
      <button onClick={changeToLight}>Light</button>
    </Conatiner>
  );
};

export default Login;
