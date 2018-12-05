<template>
  <div class="pop">
      <transition name="fade">
        <div class="mask" @click="hidden" v-show="value"></div>
      </transition>
      <transition name="slider-right">
        <div class="content" v-show="value">
          <slot></slot>
        </div>
      </transition>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },

  methods: {
    hidden() {
      this.$emit("input", false);
    }
  }
};
</script>

<style lang='less' rel='stylesheet/less' scoped>
.pop {
  z-index: 50;
}
.content {
  width: 70%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 150;
  background: #fff;
  transform: translate3d(0, 0, 0);
  transition: all 0.3s;
}
.mask {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.6);
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-avtive {
  opacity: 0;
}
.slider-right-enter,
.slider-right-leave-active {
  transform: translate3d(100%, 0, 0);
}
</style>
