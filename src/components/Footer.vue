<template>
  <div>
    <div class="footer">
      <div class="qrcode footer-item">
        <img src="../assets/qr-code.png" alt>
        <div>
          <div>关注公众号</div>
          <div class="footer-secondary">了解 教程、最新发布等</div>
        </div>
      </div>
      <div class="footer-item">
        <div class="footer-classify">帮助</div>
        <div><a href="help.html" target="_blank">帮助中心</a></div>
        <div><a href="faq.html" target="_blank">常见问题</a></div>
        <div><a href="about.html" target="_blank">联系我们</a></div>
      </div>
      <div class="footer-item">
        <div class="footer-classify">合作与资源</div>
        <div><a href="ppt.html" target="_blank">向团队介绍 FastCut</a></div>
        <div><a href="enterprise.html" target="_blank">企业定制</a></div>
        <div><a href="proxy.html" target="_blank">代理</a></div>
      </div>
      <div class="footer-item">
        <div class="footer-classify">条款与隐私</div>
        <div><a href="agreement.html" target="_blank">用户协议</a></div>
        <div><a href="privacy.html" target="_blank">隐私政策</a></div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        © {{currentYear}} 上海序研科技工作室<a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备2022012136号-1</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data: () => {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped lang="less">

</style>
