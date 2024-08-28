import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import PapeBasket from "@/pages/PageBasket.vue";


const routes = [
    {
        path: "/",
        component: HomePage
    },

    {
        path: "/sales",
        component: () => import("@/pages/PageSales.vue")
    },
    {
        path: "/shop",
        name: "shop",
        component: () => import("@/pages/PageShop.vue")
    },
    {
        path: "/review",
        component: () => import("@/pages/PageReview.vue")
    },
    {
        path: "/basket",
        component: () => import("@/pages/PageBasket.vue")
    },
    {
        path: "/persanalCabinet",
        component: () => import("@/pages/PageCabinet.vue")
    },
    {
        path: "/pages/:id/:id2",
        name: "pages",
        component: () => import("@/pages/PageCategoriesProduct.vue")
    },
    {
        path: "/order",
        component: () => import("@/pages/PageOrder.vue")
    }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;