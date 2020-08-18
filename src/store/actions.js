const actions = {
    updateUserInfo(context, data) {
        context.commit("updateUserInfo", data);
    },
    toggleCollapse(context) {
        context.commit("TOOGGLE_COLLAPSE");
    },
};
export default actions;
