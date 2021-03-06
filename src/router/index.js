import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Signup from "../views/Signup.vue";
import PlayersIndex from "../views/PlayersIndex.vue";
import PlayersShow from "../views/PlayersShow.vue";
import Following from "../views/Following.vue";
import Settings from "../views/Profile.vue";
import Games from "../views/Games.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/players",
    name: "PlayersIndex",
    component: PlayersIndex,
  },
  {
    path: "/players/:account_id",
    name: "PlayersShow",
    component: PlayersShow,
  },
  {
    path: "/following",
    name: "Following",
    component: Following,
  },
  {
    path: "/profile",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/games",
    name: "Games",
    component: Games,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
