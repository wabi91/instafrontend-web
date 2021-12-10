import { Link, Outlet } from 'react-router-dom';

const ProductList = () => (
  <div>
    <div>ProductList</div>
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="1">prd 1</Link>
      </li>
      <li>
        <Link to="2">prd 2</Link>
      </li>
      <li>
        <Link to="3">prd 3</Link>
      </li>
    </ul>
    <Outlet />
  </div>
);
export default ProductList;
