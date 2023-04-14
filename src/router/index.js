import { createRouter, createWebHistory } from "vue-router";
import notFound from "@/views/NotFound.vue";
import returnToLastPage from "@/views/ReturnToLastPage.vue";
// see    https://stackoverflow.com/questions/46590760/vue-js-2-multiple-routing-files
import routesCmnHope from "./routesCmnHope.js";
import routesCmnMultiply1 from "./routesCmnMultiply1.js";
import routesCmnMultiply2 from "./routesCmnMultiply2.js";
import routesCmnMultiply3 from "./routesCmnMultiply3.js";
import routesCmnProphet from "./routesCmnProphet.js";
import routesCmnTc from "./routesCmnTc.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routesCmnHope,
    ...routesCmnMultiply1,
    ...routesCmnMultiply2,
    ...routesCmnMultiply3,
    ...routesCmnProphet,
    ...routesCmnTc,
    {
      path: "/",
        name: "home",
        component: returnToLastPage
    },
    {
      path: "/index",
        name: "cmn-index",
        component: function () {
          return import(
            "../views/M2/cmn/index.vue"
          );
        }
    },

    {
    path: "/:catchAll(.*)",
    name: "notfound",
    component: notFound,
    }
  ],
});

export default router;
