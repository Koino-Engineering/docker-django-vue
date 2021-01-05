import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Routes from "./routes";

const routes: Array<RouteRecordRaw> = [
    {
        path: Routes.HOME,
        name: "Home",
        component: Home
    },
    {
        path: Routes.ABOUT,
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => { return import(/* webpackChunkName: "about" */ "../views/About.vue"); }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
