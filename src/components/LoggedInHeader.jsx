import { useDispatch, useSelector } from "react-redux";
import { selectUserInfos } from "../utils/selectors";
import { logout } from "../features/user";
import { Link } from "react-router-dom";

export default function LoggedInHeader({ firstname }) {
  firstname = useSelector(selectUserInfos("firstname"));
  const dispatch = useDispatch()

  return (
    <div>
      <Link to={"/profile"} className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        {firstname}
      </Link>
      <Link to={"/"} onClick={() =>dispatch(logout())} className="main-nav-item">
        <i className="fa fa-sign-out"></i>
        Sign Out
      </Link>
    </div>
  );
}
