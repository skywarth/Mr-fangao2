/*
 * @Author: liqifeng
 * @Date: 2023-06-15 10:47:04
 * @LastEditors: liqifeng Mr.undefine@protonmail.com
 * @LastEditTime: 2023-06-21 10:55:37
 * @Description: 
 */
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home/Home.vue"),
  },
  {
    path: "/CesiemEarth",
    name: "CesiemEarth",
    component: () => import("../components/CesiemEarth.vue"),
  },
  {
    path: "/test1",
    name: "test1",
    component: () => import("@/views/Test/test1.vue"),
  },
  {
    path: "/test2",
    name: "test2",
    component: () => import("@/views/Test/test2.vue"),
  },
  {
    path: "/mixin",
    name: "mixin",
    component: () => import("@/views/Composables/index.vue"),
  },
  {
    path: "/rotatetest",
    name: "rotatetest",
    component: () => import("@/views/Test/RotateTest.vue"),
  },
  {
    path: "/UlitsTest",
    name: "UlitsTest",
    component: () => import("@/views/Test/UlitsTest.vue"),
  },
  {
    path: "/olmapchange",
    name: "olmapchange",
    component: () => import("@/views/OlMapChange/OlMapChange.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: () => import("../components/Page404.vue"),
  },
];
export default routes;
