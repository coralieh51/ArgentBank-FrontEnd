import Button from "./Button";
import EditName from "./EditName";
import { selectUserInfos } from "../utils/selectors";
import { useSelector, useDispatch } from "react-redux";

/**
 * @component UserProfileHeader (if user toggles to edit mode, EditName component is displayed instead of this one)
 */
export default function UserProfileHeader({ firstname, lastname }) {
  
  const nameIsEditing = useSelector(selectUserInfos("editingName"));
  const dispatch = useDispatch()

  return nameIsEditing ? (
    <EditName firstname={firstname} lastname={lastname} />
  ) : (
    <div id="nameHeader">
      <h1>
        Welcome back
        <br />
        {firstname} {lastname} !
      </h1>
      <Button
        classStyle="edit-button"
        content="Edit Name"
        clickAction="toggleEditMode"
      />
    </div>
  );
}
