<template>
  <tab-bar>
    <!-- activeColor="deepPink" -->
    <tab-bar-item path="/home">
      <div slot="item-icon">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-shouye"></use>
        </svg>
      </div>
      <div slot="item-icon-active">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-shouyefill"></use>
        </svg>
      </div>
      <div slot="item-txt">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <div slot="item-icon">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-setting1"></use>
        </svg>
      </div>
      <div slot="item-icon-active">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-setting"></use>
        </svg>
      </div>
      <div slot="item-txt">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <div slot="item-icon">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-gouwuche"></use>
        </svg>
      </div>
      <div slot="item-icon-active">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-gouwuchefill"></use>
        </svg>
      </div>
      <div slot="item-txt">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <div slot="item-icon">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-wode"></use>
        </svg>
      </div>
      <div slot="item-icon-active">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-wodefill"></use>
        </svg>
      </div>
      <div slot="item-txt">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>