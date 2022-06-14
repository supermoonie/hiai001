<template>
  <div>
    <Header :current="'fastdownloader'"/>

    <div class="dark">
      <div class="container">
        <div class="main">
          <div class="slogan">
            <div class="title">快下载 ｜ 短视频一键批量去水印下载</div>
            <div class="description">简单、快捷、批量、去水印下载短视频</div>
            <div class="description">支持抖音、YouTube、TikTok、快手、火山、西瓜视频、likee、vimeo等众多短视频平台</div>
            <div class="btns">
              <div id="main-download" class="btn main-download">
                <el-link href="https://www.123pan.com/s/Iw4DVv-LjSq3" target="_blank" :underline="false"
                         style="color: #ffffff;">下载 ...
                </el-link>
              </div>
            </div>
            <div id="version"></div>
          </div>
          <div class="video">

          </div>
        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>

export default {
  name: 'FastDownloader',
  components: {
    Header: () => import(/* webpackChunkName: 'header' */ '../../components/Header.vue'),
    Footer: () => import(/* webpackChunkName: 'footer' */ '../../components/Footer.vue')
  },
  metaInfo: {
    title: '快下载 ｜ 短视频一键批量去水印下载',
    keywords: '快下载，快下载官网，抖音去水印，去水印，批量去水印，视频下载，批量下载',
    description: '快下载是一款批量去水印下载工具，支持抖音、YouTube、TikTok、快手、火山、西瓜视频、likee、vimeo等众多短视频平台'
  }
}
</script>

<style lang="less">

</style>
