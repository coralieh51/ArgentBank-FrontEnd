import Button from "../Button";
import { fetchLogin } from "../../features/login";
import { useNavigate } from "react-router-dom";
import { useStore } from "react-redux";

export default function Login() {
  const navigate = useNavigate();
  const store = useStore()
  
  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    await fetchLogin(store);
    const token = store.getState().user.token

    token && navigate("/user/profile")
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleLoginSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Button type="submit" content="Sign In" classStyle="sign-in-button" />
        </form>
      </section>
    </main>
  );
}
