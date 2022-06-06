<template>
  <div>
    <div class="container">
      <div class="copyright">
        © {{currentYear}} 上海序研科技工作室<a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备2022012136号-1</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Copyright',
  data: () => {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped lang="less">

</style>
