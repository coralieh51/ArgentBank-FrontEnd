import Button from "./Button"
import EditName from "./EditName"
import { useSelector } from 'react-redux';

export default function UserHeader({firstname, lastname}) {
    const nameIsEditing = useSelector(state => state.editingName === true);

    return(
        nameIsEditing ? <EditName firstname={firstname} lastname={lastname} /> :
        <div id="nameHeader">
        <h1>
          Welcome back
          <br />
          {firstname} {lastname} !
        </h1>
        <Button clickAction="edit" classStyle="edit-button" content="Edit Name"/>
      </div>
    )
}

