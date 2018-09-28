<template>
  <p>
	<template v-for="(item, index) in data" >
		<el-menu-item v-if="item.children == null || item.children.length == 0" :index="item.url" class="custom-submenu"><i :class="item.icon || ''"></i>{{item.menu_name}}</el-menu-item>
		<el-submenu :index="item.menu_id.toString()" v-if="item.children && item.children.length" class="custom-submenu">
			<template slot="title"><i :class="item.icon || ''"></i><span v-text="item.menu_name"></span></template>
			<z-submenu :data="item.children"></z-submenu>
		</el-submenu>
	</template>
	</p>
</template>

<script>
export default {
  name: "",
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang='less' rel='stylesheet/less' scoped>
</style>
