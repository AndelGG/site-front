import { Link } from 'react-router-dom';
import './index.css'

function Home() {
  return (
          <ul>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/register">register</Link>
            </li>
            <li>
              <Link to="/protected">protected</Link>
            </li>
          </ul>
  );
}

export default Home;
