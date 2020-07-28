import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login";
import Home from "@/views/home";

Vue.use(VueRouter);
const routes = [
  { path: "/login", name: "Login", component: Login },
  { path: "/", name: "Home", component: Home },
];
const router = new VueRouter({
  routes,
});

// 路由守卫，如果当前用户没有登录，就重定向到登录页面
router.beforeEach((to, from, next) => {
  console.log(to, from, next, "router");
  let isAuthenticated = localStorage.isAuthenticated;
  if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
  else next();
});

export default router;
