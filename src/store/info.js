import firebase from "firebase/app";
export default {
  state: {
    info: {},
    infoUsers: {},
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = {};
    },
    setInfoUsers(state, infoUsers) {
      state.infoUsers = infoUsers;
    },
  },
  actions: {
    async updateInfo({ dispatch, commit, getters }, toUpdate) {
      try {
        const uid = await dispatch("getUid");
        const updateData = { ...getters.info, ...toUpdate };

        await firebase.database().ref(`/users/${uid}/info`).update(updateData);
        commit("setInfo", updateData);
      } catch (error) {
        throw error;
      }
    },
    async fetchInfo({ dispatch, commit }) {
      try {
        const uid = await dispatch("getUid");
        const info = (
          await firebase.database().ref(`/users/${uid}/info`).once("value")
        ).val();
        commit("setInfo", info);
      } catch (error) {
        commit("setError", error);
        console.log(error);
        throw error;
      }
    },
    async fetchUsers({ dispatch, commit }) {
      try {
        const infoUsers = (
          await firebase.database().ref(`/users`).once("value")
        ).val();
        return Object.keys(infoUsers).map((key) => ({
          ...infoUsers[key],
          id: key,
        }));
      } catch (error) {
        throw error;
      }
    },
    async fetchCases({ dispatch, commit }) {
      try {
        const infoCases = (
          await firebase.database().ref(`/cases`).once("value")
        ).val();
        return Object.keys(infoCases).map((key) => ({
          ...infoCases[key],
          id: key,
        }));
        console.log(infoCases);
      } catch (error) {
        throw error;
      }
    },
  },
  getters: {
    info(state) {
      return state.info;
    },
    infoUsers(state) {
      return state.infoUsers;
    },
  },
};
