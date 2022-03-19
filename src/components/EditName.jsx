import Button from "./Button";

export default function EditName({ firstname, lastname }) {
  return (
    <>
      <div>
        <input
          type="text"
          id="firstnameInput"
          name="firstname"
          defaultValue={firstname}
        />
        <input
          type="text"
          id="lastnameInput"
          name="lastname"
          defaultValue={lastname}
        />
      </div>
      <div>
        <Button
          classStyle="edit-button"
          content="Save"
          clickAction="saveUpdatedUser"
        />
        <Button
          classStyle="edit-button"
          content="Cancel"
          clickAction="cancelEdit"
        />
      </div>
    </>
  );
}
