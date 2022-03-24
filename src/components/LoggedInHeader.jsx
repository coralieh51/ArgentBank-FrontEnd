import { useDispatch, useSelector } from "react-redux";
import { selectUserInfos } from "../utils/selectors";
import user from "../features/user";
import { Link } from "react-router-dom";

/**
 * @component LoggedInHeader (displays when user in logged, else the LoggedOutHeader is displayed instead)
 */
export default function LoggedInHeader({ firstname }) {
  firstname = useSelector(selectUserInfos("firstname"));
  const dispatch = useDispatch()

  return (
    <div>
      <Link to={"/profile"} className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        {firstname}
      </Link>
      <Link to={"/"} onClick={() =>dispatch(user.actions.logout())} className="main-nav-item">
        <i className="fa fa-sign-out"></i>
        Sign Out
      </Link>
    </div>
  );
}