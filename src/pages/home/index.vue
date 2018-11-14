<template>
  <div class="manage">
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  data() {
    return {
    };
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    async initData() {
      let data = await axios.get("/static/json/menu.json");
      if (data.statusText === "OK") {
        this.menu = data.data.menuList
      }
    }
  }
};
</script>

<style lang='less' rel='stylesheet/less'>
</style>
