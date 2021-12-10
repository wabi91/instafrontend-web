import { Link } from 'react-router-dom';
import { loggedInVar } from '../apollo';

const Home = () => {
  const handleLogout = () => {
    loggedInVar(false);
  };

  return (
    <div>
      <div>
        Home <Link to="/product">Product list</Link>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
