export const selectLoginStatus = (state) => (state.status)
export const selectUserToken = (state) => state.token;
export const selectUserFirstname = (state) => state.firstname;
export const selectUserLastname = (state) => state.lastname;
export const isEditingName = (state) => state.editingName;

export const selectStatus = (state, type) => (state[type].status)