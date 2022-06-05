<template>
  <div>
    <Header/>

    <div class="dark">
      <div class="container">
        <el-row>
          <el-col :span="8">1</el-col>
          <el-col :span="8">1</el-col>
          <el-col :span="8">1</el-col>
        </el-row>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import httpClient from "../../util/HttpClient"

export default {
  name: 'Buy',
  components: {
    Header: () => import(/* webpackChunkName: 'header' */ '../../components/Header.vue'),
    Footer: () => import(/* webpackChunkName: 'footer' */ '../../components/Footer.vue')
  },
  metaInfo: {
    title: '购买'
  },
  data: () => {
    return {

    }
  },
  mounted() {
    this._getAppWithCardInfo();
  },
  methods: {
    _getAppWithCardInfo() {
      const _loading = this.$loading({
        lock: true,
        text: '加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      httpClient.get('/fast-cut/app/info?appCode=FastCut').then(data => {
        console.log(data)
      }).catch(err => {
        console.error(err)
      }).finally(() => {
        _loading.close()
      })
    }
  }
}
</script>

<style lang="less">
@import url('../../styles/global.css');
@import url('../../styles/iconfont.css');
</style>
