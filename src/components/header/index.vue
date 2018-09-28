<template>
  <header class="header_top">
    <div class="head_title">便丽猫后台管理系统</div>
    <el-dropdown @command="handleCommand" menu-align='start'>
			<img :src="baseImgPath" class="avator">
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="home">首页</el-dropdown-item>
				<el-dropdown-item command="singout">退出</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
  </header>
</template>

<script>
export default {
  name: "",

  data() {
    return {
      baseImgPath: require("./default.jpg")
    };
  },

  methods: {
    handleCommand(command) {
      if (command == "home") {
        this.$router.push("/home");
      } else if (command == "singout") {
        this.$message({
          type: "success",
          message: "退出成功"
        });
        this.$router.push("/");
      }
    }
  }
};
</script>

<style lang='less' rel='stylesheet/less'>
.header_top {
  height: 90px;
  background: #213240;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 25px;
  .head_title {
    color: #fff;
    font-size: 22px;
  }
  .avator {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  .el-dropdown-menu__item {
    text-align: center;
  }
}
</style>
