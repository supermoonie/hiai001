<template>
  <div>
    <div class="footer">
      <div class="qrcode footer-item">
        <img src="../assets/qr-code.jpg" alt>
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
        <div class="footer-classify">激活码</div>
        <div><a href="find.html" target="_blank">忘记激活码</a></div>
      </div>
      <div class="footer-item">
        <div class="footer-classify">合作与资源</div>
        <!--        <div><a href="ppt.html" target="_blank">向团队介绍 FastCut</a></div>-->
        <div><a href="enterprise.html" target="_blank">企业定制</a></div>
        <div><a href="proxy.html" target="_blank">代理</a></div>
      </div>
      <div class="footer-item">
        <div class="footer-classify">条款与隐私</div>
        <div><a href="agreement.html" target="_blank">用户协议</a></div>
        <div><a href="privacy.html" target="_blank">隐私政策</a></div>
      </div>
    </div>

    <div style="max-width: 1056px; margin: 0 auto;">
      <el-divider></el-divider>
    </div>

    <Copyright/>
  </div>
</template>

<script>
import Vue from 'vue'
import {Divider} from "element-ui"
Vue.use(Divider)

export default {
  name: 'Footer',
  components: {
    Copyright: () => import(/* webpackChunkName: 'copyright' */ './Copyright.vue')
  }
}
</script>

<style scoped lang="less">
@import url('../styles/global.css');
@import url('../styles/iconfont.css');
</style>
