import { useRoutes } from 'react-router-dom';
import { Home, NotFound, Product, ProductList } from './screens';

function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
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
}

export default App;
