<template>
  <div
    :class="[
      `sider-bar-${$route.query.themeCol}`,
      `sider-bar-${$route.query.themeLay}`
    ]"
  >
    <a-layout id="components-layout-demo-custom-trigger" class="layout">
      <Head class="header"></Head>
      <a-layout-sider
        v-if="$route.query.themeLay !== 'top'"
        :trigger="null"
        collapsible
        v-model="collapsed"
        :theme="$route.query.themeCol || 'dark'"
      >
        <div class="logo">Ant Design Vue Pro</div>
        <sider-contol class="sider"></sider-contol>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="toggleCollapsed"
          />
        </a-layout-header>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px'
          }"
        >
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="textAlign: center">
          <Footer></Footer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <auth-contol :auth="['admin']">
      <a-drawer
        title="Basic Drawer"
        placement="right"
        :closable="false"
        @close="onClose"
        :visible="visible"
      >
        <template #handle>
          <a-icon
            :type="visible ? 'close' : 'setting'"
            @click="visible = !visible"
            class="setting-btn"
          />
        </template>
        <div>
          <h3>更改主题颜色</h3>
          <a-radio-group
            @change="e => changeTheme('themeCol', e.target.value)"
            v-model="themeCol"
          >
            <a-radio value="dark">dark</a-radio>
            <a-radio value="light">light</a-radio>
          </a-radio-group>
          <h3>更改主题样式</h3>
          <a-radio-group
            @change="e => changeTheme('themeLay', e.target.value)"
            v-model="themeLay"
          >
            <a-radio value="left">left</a-radio>
            <a-radio value="top">top</a-radio>
          </a-radio-group>
        </div>
      </a-drawer>
    </auth-contol>
  </div>
</template>

<script>
import Head from "@/layout/baselayout/Head";
import Footer from "@/layout/baselayout/Footer";
import SiderContol from "@/layout/baselayout/SiderContol";

export default {
  name: "BaseLayout",
  data() {
    return {
      collapsed: false,
      visible: false,
      themeCol: "dark",
      themeLay: "left"
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    onClose() {
      this.visible = false;
    },
    changeTheme(type, value) {
      this.$router.replace({
        query: {
          ...this.$route.query,
          [type]: value
        }
      });
    }
  },
  components: {
    Head,
    SiderContol,
    Footer
  }
};
</script>

<style scoped>
.layout {
  height: 100vh;
}
.trigger {
  height: 40px;
  width: 40px;
  line-height: 40px;
  font-size: 24px;
}

.header {
  position: absolute;
  right: 0;
  top: 0;
}

.logo {
  padding-left: 5px;
  height: 64px;
  line-height: 64px;
  color: white;
  overflow: hidden;
}

.setting-btn {
  position: absolute;
  line-height: 48px;
  text-align: center;
  right: 256px;
  top: 300px;
  display: block;
  height: 48px;
  width: 48px;
  font-size: 25px;
  color: #eee;
  background-color: #1890ff;
  border-radius: 10px 0 0 10px;
}
.sider-bar-light >>> .logo,
.sider-bar-light >>> .sider {
  color: #000000;
}
</style>
