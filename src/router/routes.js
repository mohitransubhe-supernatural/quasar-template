const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/dashboard", component: () => import("pages/DashBoard.vue") },
      { path: "/analytics", component: () => import("src/pages/AnalyticsPage.vue") },
      { path: "/statistics", component: () => import("src/pages/StatisticsPage.vue") },
      { path: "/my_profile", component: () => import("src/pages/ProfilePage.vue") },
      { path: "/customer_management", component: () => import("src/pages/CustomerManagement.vue") },
      { path: "/transactions", component: () => import("src/pages/TransactionPage.vue") },
      { path: "/sales_invoices", component: () => import("src/pages/InvoicePage.vue") },
    ],
  },

  {
    path: '/login',
    component: () => import('pages/LoginPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
