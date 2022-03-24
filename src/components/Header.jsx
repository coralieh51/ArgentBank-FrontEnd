import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import argentBankLogo from "../assets/img/argentBankLogo.png";
import { selectUserInfos } from "../utils/selectors";
import LoggedInHeader from "./LoggedInHeader";
import LoggedOutHeader from "./LoggedOutHeader";

/**
 * @component Header 
 */
function Header() {
  const token = useSelector(selectUserInfos("token"));
  return (
    <nav className="main-nav">
      <Link to={"/"}>
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {token === "" ? <LoggedOutHeader /> : <LoggedInHeader />}
    </nav>
  );
}

export default Header;
