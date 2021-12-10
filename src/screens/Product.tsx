import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();

  return <div>상품{id} Product</div>;
};

export default Product;
