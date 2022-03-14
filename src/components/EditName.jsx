import {SAVING_USER} from "../features/user";
import Button from "./Button";

export default function EditName({ firstname, lastname }) {

  return (
    // <form action="" method="post" className="edit-name">
    <>
      <div>
        <input type="text" id="firstnameInput" name="firstname" placeholder={firstname}/>
        <input type="text" id="lastnameInput" name="lastname" placeholder={lastname}/>
      </div>
      <div>
        {/* <Button classStyle="edit-button" content="Save" clickAction={SAVING_USER}/>
        <Button classStyle="edit-button" content="Cancel" clickAction={SAVING_USER} /> */}
      </div>
      </>
    /* </form> */
  );
}
