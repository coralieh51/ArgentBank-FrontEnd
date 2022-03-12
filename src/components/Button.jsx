import { useDispatch, useStore, useSelector } from "react-redux";
import { postLoginRequest } from "../assets/getData";
import { useNavigate } from "react-router-dom";

export default function Button({content, classStyle, type, clickAction }) {
  const store = useStore()
  const dispatch = useDispatch();
  const navigate = useNavigate()


  function handleClick() {
    if (clickAction === "login") {
      const email = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      postLoginRequest(email, password)
      
      navigate("/")
    } else {
    dispatch({type : clickAction })
    }
  }
    return (
        <button onClick={clickAction && handleClick} className={classStyle} type={type}>{content}</button>
    )
}