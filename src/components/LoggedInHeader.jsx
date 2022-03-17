import { useSelector } from "react-redux";
import { selectUserInfos } from "../utils/selectors";
import { store } from "../utils/store";

export default function LoggedInHeader({ firstname }) {
  firstname = useSelector(selectUserInfos("firstname"));

  return (
    <div>
      <a className="main-nav-item" href="/profile">
        <i className="fa fa-user-circle"></i>
        {firstname}
      </a>
      <a className="main-nav-item" href="/">
        <i className="fa fa-sign-out"></i>
        Sign Out
      </a>
    </div>
  );
}
