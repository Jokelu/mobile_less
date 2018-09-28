<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './style/css/common.less';
@import '../static/font/iconfont.css';
#app {
  width: 100%;
  height: 100%;
}
</style>
