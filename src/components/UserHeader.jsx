import Button from "./Button"
import EditName from "./EditName"
import { useSelector } from 'react-redux';
import { EDITING_USER } from "../features/user";
import { isEditingName } from "../utils/selectors";

export default function UserHeader({firstname, lastname}) {
    const nameIsEditing = useSelector(isEditingName);

    return(
        nameIsEditing ? <EditName firstname={firstname} lastname={lastname} /> :
        <div id="nameHeader">
        <h1>
          Welcome back
          <br />
          {firstname} {lastname} !
        </h1>
        <Button classStyle="edit-button" content="Edit Name"/>
      </div>
    )
}

