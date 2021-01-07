import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Routes from "./routes";
import Articles from "../views/Articles.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: Routes.HOME,
        name: "Home",
        component: Home,
    },
    {
        path: Routes.ABOUT,
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => { return import(/* webpackChunkName: "about" */ "../views/About.vue"); },
    },
    {
        path: Routes.ARTICLES,
        name: "Articles",
        component: Articles,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
