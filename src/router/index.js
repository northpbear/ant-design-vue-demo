import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import findLast from "lodash/findLast";
import { notification } from "ant-design-vue";

import Fribidden from "@/views/403.vue";
import NotFound from "@/views/404.vue";
import { check, isLogin } from "../untils/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    name: "user",
    component: () =>
      import(/*webpackChunkName: 'user'*/ "@/layout/user/UserLayout.vue"),
    children: [
      {
        path: "/user",
        redirect: "/user/login"
      },
      {
        path: "login",
        name: "login",
        component: () =>
          import(/*webpackChunkName: 'user'*/ "@/views/user/login.vue")
      },
      {
        path: "register",
        name: "register",
        component: () =>
          import(/*webpackChunkName: \'user\'*/ "@/views/user/register.vue")
      }
    ]
  },
  {
    path: "/",
    component: () => import("@/layout/baselayout/BaseLayout.vue"),
    children: [
      {
        path: "/",
        redirect: "dashboard"
      },
      //dashboard
      {
        path: "dashboard",
        name: "dashboard",
        meta: { auths: ["user", "admin"] },
        component: { render: h => h("router-view") },
        children: [
          {
            path: "/",
            redirect: "workplace"
          },
          {
            path: "workplace",
            name: "workplace",
            component: () => import("@/views/dashboard/workplace/WorkPlace.vue")
          },
          {
            path: "analysis",
            name: "analysis",
            component: () => import("@/views/dashboard/analysis/Analysis.vue")
          }
        ]
      },
      //form
      {
        path: "form",
        name: "form",
        meta: { auths: ["admin"] },
        component: { render: h => h("router-view") },
        children: [
          {
            path: "/",
            redirect: "base-form"
          },
          {
            path: "base-form",
            name: "base-form",
            component: () => import("@/views/form/baseform/BaseForm.vue")
          },
          {
            path: "step-form",
            name: "step-form",
            component: () =>
              import("@/views/form/stepform/stepform-children/Step1.vue")
          },
          {
            path: "step-form/step2",
            name: "step2",
            component: () =>
              import("@/views/form/stepform/stepform-children/Step2.vue")
          },
          {
            path: "step-form/step3",
            name: "step3",
            component: () =>
              import("@/views/form/stepform/stepform-children/Step3.vue")
          }
        ]
      }
    ]
  },
  {
    path: "/403",
    name: "403",
    component: Fribidden
  },
  {
    path: "*",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  let nowAuth = findLast(to.matched, item => {
    return item.meta.auths;
  });
  if (nowAuth && !check(nowAuth.meta.auths)) {
    if (!isLogin() && to.path !== "/user/login") {
      next({ name: "login" });
    } else if (to.path !== "403") {
      notification.error({
        message: "你没有权限",
        description: "请联系管理员"
      });
      next({ name: "403" });
    }
  }
  NProgress.done();
  next();
});
router.afterEach((to, from) => {
  if (to.path !== from.path) {
    NProgress.done();
  }
});

export default router;
