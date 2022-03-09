import ReactDOM from "react-dom";
import { createStore } from 'redux';
import EditName from '../components/EditName';
import produce from "immer";

const initialState = {
    token : "",
    firstname : "ratata",
    lastname : "tatoum",
    editingName : false,
    cancel : false,
}

const editUserAction = () => ({
    type : "edit",
});

const saveName = () => ({
    type : "saveName"
});

const cancelNameEditing = () => ({
    type : "cancel",
})

function userReducer(state, action) {

    switch (action.type) {
        case "edit" :

            return {
                ...state, editingName : !state.editingName
            }
            case "saveName" :
                const firstnameInput = document.getElementById("firstnameInput");
                const lastnameInput = document.getElementById("lastnameInput");
                console.log(firstnameInput)
                console.log(lastnameInput)
                return produce(state, draft => {
                    draft.firstname = firstnameInput.value
                    draft.lastname = lastnameInput.value
                })
            case "cancel" :
                return {
                    ...state = !state.editingName
                }
                
    default : return state;
    }
}

export const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(userReducer, initialState, reduxDevtools);