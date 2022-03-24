import { useDispatch } from "react-redux";
import {toggleEditMode, } from "../features/user";
import { updateUserData } from "../features/fetchUpdate";

/**
 * @component Button
 */
export default function Button({ content, classStyle, type, clickAction }) {
  const dispatch = useDispatch();

  /**
   * clickAction prop defines action executed by clicking button
   */
  function handleClick() {
    if (clickAction === "toggleEditMode" || clickAction === "cancelEdit") {
      dispatch(toggleEditMode());
    }
    if (clickAction === "saveUpdatedUser") {
      const newFirstName = document.getElementById("firstnameInput").value;
      const newLastName = document.getElementById("lastnameInput").value;
      const body = { firstName: newFirstName, lastName: newLastName };
      dispatch(updateUserData(body));
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
