const mutations = {
    updateUserInfo(state, data) {
        // 变更状态
        state.userInfo = data;
        console.log("触发mutations", state, data);
    },
    TOOGGLE_COLLAPSE(state) {
        state.collapse = !state.collapse;
    },
};
export default mutations;
