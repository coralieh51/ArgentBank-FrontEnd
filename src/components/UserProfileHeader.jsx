import Button from "./Button"
import EditName from "./EditName"
import { useSelector } from 'react-redux';
import { EDITINGUSER } from "../features/user";
import { selectUserInfos } from "../utils/selectors";

export default function UserProfileHeader({firstname, lastname}) {
    const nameIsEditing = useSelector(selectUserInfos("editingName"));
    console.log(nameIsEditing)

    return(
        nameIsEditing ? <EditName firstname={firstname} lastname={lastname} /> :
        <div id="nameHeader">
        <h1>
          Welcome back
          <br />
          {firstname} {lastname} !
        </h1>
        <Button classStyle="edit-button" content="Edit Name" clickAction={EDITINGUSER}/>
      </div>
    )
}

