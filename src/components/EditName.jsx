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
        <Button classStyle="edit-button" content="Save" clickAction="saveName" />
        <Button classStyle="edit-button" content="Cancel" clickAction="saveName" />
      </div>
      </>
    /* </form> */
  );
}
