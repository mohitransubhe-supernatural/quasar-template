const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/dashboard", component: () => import("pages/DashBoard.vue") },
      { path: "/analytics", component: () => import("src/pages/AnalyticsPage.vue") },
      { path: "/statistics", component: () => import("src/pages/StatisticsPage.vue") },
      { path: "/my_profile", component: () => import("src/pages/ProfilePage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
