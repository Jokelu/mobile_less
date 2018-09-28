<template>
  <el-menu :default-active="defaultActive" 
    background-color="#213240" 
    text-color="#fff"
    active-text-color="#409EFF"
    router 
    class="sub-menus">
		<submenu :data="menu"></submenu>
	</el-menu>
</template>

<script>
import submenu from "./submenu";
export default {
  name: "",
  components: {
    submenu
  },
  props: {
    defaultActive: {
      type: String
    },
    menu: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang='less' rel='stylesheet/less' scoped>
</style>
