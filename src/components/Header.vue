<template>
  <div class="container header">
    <a href="index.html"><img class="logo" src="../assets/logo.png" alt=""></a>
    <el-menu :default-active="activeIndex" mode="horizontal" text-color="#172b4d" active-text-color="cornflowerblue">
      <el-menu-item index="1">
        <el-link href="index.html">快 剪</el-link>
      </el-menu-item>
      <el-menu-item index="2">
        <el-link href="fastdownloader.html">快下载</el-link>
      </el-menu-item>
      <el-menu-item index="3">
        <el-link href="/docs/index.html">教程</el-link>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">价格</template>
        <el-menu-item index="4-1">
          <el-link href="buy.html?appCode=FastCut" :underline="false">快 剪</el-link>
        </el-menu-item>
        <el-menu-item index="4-2">
          <el-link href="buy.html?appCode=FastDownloader" :underline="false">快下载</el-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';

export default {
  name: 'Header',
  props: ['current', 'appCode', 'activeIndex'],
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="less">

</style>
