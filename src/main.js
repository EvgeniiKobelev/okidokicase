import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import messagePlugin from "@/utils/message.plugin";
import "materialize-css/dist/js/materialize.min";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

firebase.initializeApp({
  apiKey: "AIzaSyAjd7-2lt5f0E5ZdD54XNEUbew72uSJZis",
  authDomain: "okidokicasedevcom.firebaseapp.com",
  databaseURL: "https://okidokicasedevcom-default-rtdb.firebaseio.com",
  projectId: "okidokicasedevcom",
  storageBucket: "okidokicasedevcom.appspot.com",
  messagingSenderId: "831078011029",
  appId: "1:831078011029:web:3719cec47f98e447f64b9c",
});

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(store)
      .use(router)
      .use(messagePlugin)
      .mount("#app");
  }
});
