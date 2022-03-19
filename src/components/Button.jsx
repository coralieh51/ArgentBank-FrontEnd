import { useDispatch } from "react-redux";
import { saveUpdatedUser, toggleEditMode, updateUserData } from "../features/user";
import { putUserProfile } from "../services/getData";

export default function Button({ content, classStyle, type, clickAction }) {
  const dispatch = useDispatch();

  function handleClick() {
    if (clickAction === "toggleEditMode" || clickAction === "cancelEdit") {
      dispatch(toggleEditMode());
    }
    if (clickAction === "saveUpdatedUser") {
      const firstnameInput = document.getElementById("firstnameInput").value;
      const lastnameInput = document.getElementById("lastnameInput").value;
      dispatch(saveUpdatedUser(firstnameInput, lastnameInput));
      dispatch(updateUserData())
    }
  }

  return (
    <button
      onClick={clickAction && handleClick}
      className={classStyle}
      type={type}
    >
      {content}
    </button>
  );
}
