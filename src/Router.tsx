import { useRoutes } from 'react-router-dom';
import Proptypes from 'prop-types';

import { Home, Login, NotFound, Product, ProductList } from './screens';

type RouterProps = {
  isLoggedIn: boolean;
  isDarkMode: boolean;
};

const Router = ({ isLoggedIn }: RouterProps) => {
  const element = useRoutes([
    {
      path: '/',
      element: isLoggedIn ? <Home /> : <Login />,
    },
    {
      path: '/product',
      element: <ProductList />,
      children: [{ path: ':id', element: <Product /> }],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return element;
};

Router.prototype = {
  isLoggedIn: Proptypes.bool.isRequired,
  isDarkMode: Proptypes.bool.isRequired,
};

export default Router;
