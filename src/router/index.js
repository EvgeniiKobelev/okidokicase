import { createRouter, createWebHistory } from "vue-router";
import firebase from "firebase/app";
const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: "empty" },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: "empty" },
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/news",
    name: "news",
    meta: { layout: "empty" },
    component: () => import("../views/News.vue"),
  },
  {
    path: "/faq",
    name: "faq",
    meta: { layout: "empty" },
    component: () => import("../views/Faq.vue"),
  },
  {
    path: "/cases",
    name: "cases",
    meta: { layout: "main", auth: true },
    component: () => import("../views/Cases.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: { layout: "empty" },
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    meta: { layout: "main", auth: true },
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/profile/otpr-:id",
    name: "Otpr",
    props: true,
    meta: { layout: "main", auth: true },
    component: () => import("../views/Otpr.vue"),
  },
  {
    path: "/profile/pol-:id",
    name: "Pol",
    props: true,
    meta: { layout: "main", auth: true },
    component: () => import("../views/Pol.vue"),
  },
  {
    path: "/rules",
    name: "Rules",
    meta: { layout: "empty" },
    component: () => import("../views/Rules.vue"),
  },
  {
    path: "/okidoki",
    name: "okidoki",
    meta: { layout: "main", auth: true },
    component: () => import("../views/OkiDoki.vue"),
  },
  {
    path: "/polozhenie",
    name: "polozhenie",
    component: () => import("../views/Polozhenie.vue"),
  },
  {
    path: "/politicconf",
    name: "politicconf",
    component: () => import("../views/Politicconf.vue"),
  },
  {
    path: "/rulesforuser",
    name: "rulesforuser",
    component: () => import("../views/Rulesforuser.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some((record) => record.meta.auth);

  if (requireAuth && !currentUser) {
    next("/login?message=login");
  } else {
    next();
  }
});

export default router;
