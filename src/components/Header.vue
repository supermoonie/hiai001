<template>
  <div class="container header">
    <a href="index.html"><img class="logo" src="../assets/logo.png" alt=""></a>
    <div class="menu">
      <a href="index.html" :class="'index' === current ? 'current' : ''">首页</a>
      <a href="fastdownloader.html" :class="'fastdownloader' === current ? 'current' : ''" target="_blank">快下载</a>
      <a href="docs/index.html" target="_blank">教程</a>
      <a :href="'index' === current ? '#download' : 'index.html#download'" :target="'index' === current ? '' : '_blank'">下载</a>
      <a href="buy.html" target="_blank" :class="'buy' === current ? 'current' : ''">购买</a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['current']
}
</script>

<style scoped lang="less">

</style>
