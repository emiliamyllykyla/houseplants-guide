import { Link } from "react-router-dom";
import { useAuth } from "./Auth";
import "../nav.css";

const Navbar = () => {
  const user = useAuth();

  return (
    <nav>
      <h1>
        <Link to="/">HOUSEPLANT GUIDE</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/plants">All Plants</Link>
        </li>
        {user && (
          <>
            <li>
              <Link to="/add">Add a Plant</Link>
            </li>
            <li>
              <Link to="/delete">Delete Plants</Link>
            </li>
            <li>
              <Link to="/login">Admin</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
