<template>
  <div id="app">
    <main-tab-bar />
    <div>123</div>
    <router-view></router-view>

  </div>
</template>

<script>
import MainTabBar from "@/components/content/maintabbar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
