<template>
  <div class="tar-bar-item"
       @click="itemClick">
    <div class="tar-bar-img"
         v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div class="tar-bar-img"
         v-else
         :style="activeStyle">
      <slot name="item-icon-active"></slot>
    </div>

    <div :style="activeStyle">
      <slot name="item-txt"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      // /home -> item1(/home) = true
      // /home -> item1(/category) = false
      // /home -> item1(/cart) = true
      // /home -> item1(/profile) = true
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      // console.log(111);
      if (this.$router.path != this.path) {
        this.$router.push(this.path);
      }
    }
  }
};
</script>
<style scoped>
.tar-bar-item {
  flex: 1;
  text-align: center;
  justify-content: center;
  height: 49px;
  font-weight: bold;
}
.tar-bar-img {
  margin-top: 3px;
  vertical-align: middle;
}
</style>