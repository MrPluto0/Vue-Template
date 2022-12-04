import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

type IRoute = RouteRecordRaw & {
  meta?: {
    title?: string;
    icon?: string;
    keepAlive?: boolean;
  };
};

const routes: IRoute[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("@/pages/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { routes };

export default router;
