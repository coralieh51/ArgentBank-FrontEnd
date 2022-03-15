export const selectLoginStatus = (state) => (state.status)
export const selectUserInfos = (type) => (state) => state.user[type];
export const selectUserFirstname = (state) => state.firstname;
export const selectUserLastname = (state) => state.lastname;
export const isEditingName = (state) => state.editingName;

export const selectStatus = (state, type) => (state[type].status)