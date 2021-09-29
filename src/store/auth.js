import firebase from "firebase/app";
import "firebase/storage";
export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
    async register(
      { dispatch, commit },
      {
        email,
        password,
        name,
        date,
        imageData,
        sendPage,
        activeProject,
        tracking,
        pochtindex,
        country,
        myfavorites,
        reggender,
        regage,
      }
    ) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch("getUid");
        await firebase
          .auth()
          .currentUser.sendEmailVerification()
          .then(() => {
            console.log("Письмо отправлено на почту");
          });
        // add avatar
        if (imageData === undefined) {
          const storageRef = firebase.storage().ref();
          const imageRef = storageRef.child(`images/noavatar.png`);
          const downloadUrl = await imageRef.getDownloadURL();
          // add users
          await firebase.database().ref(`/users/${uid}/info`).set({
            stars: 0,
            KolichestvoOtzivov: 0,
            name: name,
            date: date,
            avatarImg: downloadUrl,
            sendPage: sendPage,
            activeProject: activeProject,
            tracking: tracking,
            pochtindex: pochtindex,
            country: country,
            myfavorites: myfavorites,
            reggender: reggender,
            regage: regage,
          });
        } else {
          const metaData = {
            contentType: "image/png",
          };
          const storageRef = firebase.storage().ref();
          const imageRef = storageRef.child(`images/${uid}.png`);
          await imageRef.put(imageData, metaData);
          const downloadUrl = await imageRef.getDownloadURL();
          // add users
          await firebase.database().ref(`/users/${uid}/info`).set({
            stars: 0,
            name: name,
            date: date,
            avatarImg: downloadUrl,
            sendPage: false,
            activeProject: false,
            tracking: tracking,
            pochtindex: pochtindex,
            country: country,
            myfavorites: myfavorites,
            reggender: reggender,
            regage: regage,
          });
        }
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async logout({ commit }) {
      await firebase.auth().signOut();
      commit("clearInfo");
    },
  },
};
