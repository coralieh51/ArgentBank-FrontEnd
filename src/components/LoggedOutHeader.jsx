import { Link } from "react-router-dom";

/**
 * @component LoggedOutHeader (displayed when user isn't logged in instead of LoggedInHeader)
 */
export default function LoggedOutHeader() {
  return (
    <div>
      <Link className="main-nav-item" to={"/login"}>
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    </div>
  );
}