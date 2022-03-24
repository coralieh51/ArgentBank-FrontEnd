import { createSlice } from "@reduxjs/toolkit";
import { saveUpdatedUser } from "../features/user";
import { putUserProfile } from "../services/getData";
import { selectStatus } from "../utils/selectors";

const initialState = {
  status: "void",
  data: null,
  error: null,
};

/**
 * Update reducer, allows the modifications of user's firtname and lastname 
 */
const {actions, reducer} = createSlice({
  name : "update",
  initialState,
  reducers : {
    fetch : {
      reducer : (draft, action) => {
        if (draft.status === "void") {
          draft.status = "pending";
          return;
        }
        if (draft.status === "rejected") {
          draft.error = null;
          draft.status = "pending";
          return;
        }
        if (draft.status === "resolved") {
          draft.status = "updating";
          return;
        }
        return;
      }
    },
    resolved : {
      reducer : (draft, action) => {
        if (draft.status === "pending" || draft.status === "updating") {
          draft.data = action.payload;
          draft.status = "resolved";
          return;
        }
        return;
      }
    },
    rejected : {
      reducer : (draft, action) => {
        if (draft.status === "pending" || draft.status === "updating") {
          draft.error = action.payload;
          draft.data = null;
          draft.status = "rejected";
          return;
        }
        return;
      }
    },
  }
})

/**
 * The process sends a request to API to allow edit user's firstname & lastname and then persist it into db
 * @param {object} body has to contain user's email and password, also needs token in header req
 * persists modifications into db once all credentials fulfilled
 */
export function updateUserData(body) {
  return async (dispatch, getState) => {
    const status = selectStatus(getState(), "update");
    const token = getState().user.token;
    if (status === "pending" || status === "updating") {
      return;
    }
    dispatch(actions.fetch());
    try {
      
      const data = await putUserProfile(token, body);
      if (data.status !== 200) {
        throw new Error(data.message);
      } else {
        dispatch(actions.resolved(data));
        dispatch(saveUpdatedUser(data.body))
      }
    } catch (error) {
      dispatch(actions.rejected(error));
    }
  };
}

export default reducer;