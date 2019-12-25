<template>
  <div>
    <a-menu
      :defaultOpenKeys="['dashboard']"
      :selectedKeys="selectedKey"
      mode="inline"
      :inlineCollapsed="collapsed"
      :theme="$route.query.themeCol || 'dark'"
    >
      <a-sub-menu key="dashboard">
        <span slot="title"
          ><a-icon type="dashboard" :openKeys="openKeys" /><span
            >仪表盘</span
          ></span
        >
        <!--                path="dashboard/analysis"-->
        <a-menu-item key="analysis" @click="toPage">分析页</a-menu-item>
        <a-menu-item key="outter">监控页（外部）</a-menu-item>
        <!--                path="dashboard/workplace"-->
        <a-menu-item key="workplace" @click="toPage">工作台</a-menu-item>
        <a-menu-item key="trypage">测试功能</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="form" v-if="selectable">
        <span slot="title"><a-icon type="form" /><span>表单页</span></span>
        <a-menu-item key="base-form" @click="toPage">基础表单</a-menu-item>
        <a-menu-item key="step-form" @click="toPage">分步表单</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import { getCurrentAuth } from "@/untils/auth";

export default {
  name: "SideContol",
  data() {
    return {
      collapsed: false,
      paths: {
        analysis: "analysis",
        workplace: "workplace",
        "base-form": "base-form",
        "step-form": "step-form"
      },
      openKeys: ["dashboard"],
      keyy: this.$router,
      userAuth: getCurrentAuth()
    };
  },
  computed: {
    selectedKey() {
      return [this.keyy.history.current.name] || ["workplace"];
    },
    selectable() {
      return ["admin"].includes(this.userAuth);
    }
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    toPage(event) {
      this.$router.replace({ name: this.paths[event.key] }).catch(err => err);
      // console.log(this.$router.history);
    }
  }
};
</script>

<style scoped>
div {
  color: white;
}
</style>
