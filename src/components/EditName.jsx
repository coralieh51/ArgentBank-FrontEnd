import {CANCELINGCHANGES, SAVINGUSER} from "../features/user";
import Button from "./Button";

export default function EditName({ firstname, lastname }) {
  return (
    <>
      <div>
        <input type="text" id="firstnameInput" name="firstname" placeholder={firstname}/>
        <input type="text" id="lastnameInput" name="lastname" placeholder={lastname}/>
      </div>
      <div>
        <Button classStyle="edit-button" content="Save" clickAction={SAVINGUSER}/>
        <Button classStyle="edit-button" content="Cancel" clickAction={CANCELINGCHANGES} />
      </div>
      </>
  );
}
