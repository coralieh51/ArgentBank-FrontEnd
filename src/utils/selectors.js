export const selectUserInfos = (type) => (state) => state.user[type];
export const isEditingName = (state) => state.editingName;
export const selectStatus = (state, type) => state[type].status;