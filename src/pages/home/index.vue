<template>
  <div class="manage">
    <button @click="show">侧边栏</button>
    <pop v-model="showFlag"></pop>
  </div>
</template>

<script>
import Pop from "@/components/pop";
export default {
  name: "",
  data() {
    return {
      showFlag: false
    };
  },
  components: {
    Pop
  },
  computed: {},
  mounted() {},
  methods: {
    show() {
      console.log(11);
      this.showFlag = true;
    }
  }
};
</script>

<style lang='less' rel='stylesheet/less'>
.manage {
  width: 100%;
  height: 100%;
}
</style>
