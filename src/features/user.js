import produce from "immer";

const initialState = {
  token : "",
  firstname: "",
  lastname: "",
  editingName: false,
};

export const LOGIN = "login"
export const GETTING_USER = "getUser";
export const EDITING_USER = "editUser";
export const SAVING_USER = "saveUpdatedUser";

export const login = (token) => ({
  type : LOGIN,
  payload : {token : token},
})

const getUser = (firstname, lastname) => ({
  type: GETTING_USER,
  payload: { firstname: firstname, lastname: lastname },
});

const editUser = () => ({
  type: EDITING_USER,
});

const saveUpdatedUser = () => ({
  type: SAVING_USER,
});

export function userReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOGIN : {
        draft.token = action.payload.token
        return
      }
      case GETTING_USER : {
        draft.firstname = action.payload.firstname;
        draft.lastname = action.payload.lastname;
        return
      }
      case EDITING_USER : {
        draft.editingName = !draft.editingName;
        return
      }
      case SAVING_USER :
        const firstnameInput = document.getElementById("firstnameInput");
        const lastnameInput = document.getElementById("lastnameInput");
        draft.firstname = firstnameInput.value;
        draft.lastname = lastnameInput.value;
        return
      default:
        return state;
    }
  });
}