import { useSelector } from "react-redux";
import { selectUserInfos } from "../utils/selectors";

export default function LoggedInHeader(firstname) {
  firstname = useSelector(selectUserInfos("firstname"))

  return (
    <div>
      <a class="main-nav-item" href="/profile">
        <i class="fa fa-user-circle"></i>
        {firstname}
      </a>
      <a class="main-nav-item" href="/">
        <i class="fa fa-sign-out"></i>
        Sign Out
      </a>
    </div>
  );
}
