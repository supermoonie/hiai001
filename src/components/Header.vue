<template>
  <div class="container header">
    <a href="index.html" class="hidden-xs-only"><img class="logo" src="../assets/logo.png" alt=""></a>
    <div class="menu">
      <a href="index.html" :class="'index' === current ? 'current' : ''">快剪</a>
      <a href="fastdownloader.html" :class="'fastdownloader' === current ? 'current' : ''">快下载</a>
      <a href="docs/index.html" target="_blank">教程</a>
      <a href="#download">下载</a>
      <a :href="'buy.html?appCode=' + appCode" target="_blank" :class="'buy' === current ? 'current' : ''">价格</a>
    </div>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
export default {
  name: 'Header',
  props: ['current', 'appCode']
}
</script>

<style scoped lang="less">

</style>
