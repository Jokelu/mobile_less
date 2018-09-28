<template>
  <div class="manage">
    <!-- 顶部 -->
      <header-top></header-top>
      <div class="progress">
        <div :class="getProgressClass"></div>
      </div>
      <!-- 内容 -->
      <section class="content">
        <!-- 左侧菜单 -->
          <div class="asideMenu">
              <z-menu :menu="menu" defaultActive="4"></z-menu>
          </div>
          <!-- 右侧内容 -->
          <div class="content-body">
            <el-breadcrumb separator="/" class="bread">
              <el-breadcrumb-item  v-for="(item, index) in breadItems" 
              :key="index" :to="{ path: item.path || '' }">
              <span class="breadcrumb-item">{{item.name || item}}</span>
            </el-breadcrumb-item>
            </el-breadcrumb>
            <transition name="el-zoom-in-top" mode="out-in">
              <router-view class="content-page">
                </router-view>
            </transition>
          </div>
      </section>
  </div>
</template>

<script>
import axios from "axios";
import headerTop from "@/components/header";
export default {
  name: "",
  components: {
    headerTop
  },
  data() {
    return {
      /* 开始加载 */
      startLoading: false,
      hasPermissed: false,
      menu: [
        {
          children: [
            {
              displayName: "java",
              url: "/home/java",
              icon: "el-icon-tickets",
              id: 3
            },
            {
              displayName: "javaScript",
              url: "/home/javaScript",
              icon: "el-icon-tickets",
              id: 4
            },
            {
              displayName: "文本编辑",
              url: "/home/vueEdit",
              icon: "el-icon-tickets",
              id: "/home/vueEdit"
            }
          ],
          displayName: "编程语言",
          url: "",
          icon: "el-icon-menu",
          id: 1
        },
        {
          children: [
            {
              displayName: "vue",
              url: "",
              icon: "el-icon-tickets",
              id: 5
            },
            {
              displayName: "react",
              url: "",
              icon: "el-icon-tickets",
              id: 6
            }
          ],
          displayName: "采购管理",
          url: "",
          icon: "el-icon-menu",
          id: 2
        }
      ]
    };
  },
  computed: {
    getProgressClass() {
      return {
        value: true,
        loading: this.startLoading,
        complete: !this.startLoading && this.hasPermissed
      };
    },
    // 面包屑
    breadItems() {
      let meta = this.$route.meta || [];
      console.log(meta);
      return [{ path: "/", name: "首页" }].concat(meta);
    }
  },
  mounted() {
    setTimeout(() => {
      this.startLoading = true;
      this.hasPermissed = true;
      this.startLoading = false;
      this.initData();
    }, 0);
  },
  methods: {
    async initData() {
      let data = await axios.get("/static/json/menu.json");
      console.log(data);
     
      if (data.statusText === "OK") {
        this.menu = data.data.menuList
        console.log(data);
        // this.hasPermissed = true;
        // this.startLoading = false;
      }
    }
  }
};
</script>

<style lang='less' rel='stylesheet/less'>
@import "../style/home.less";
</style>
