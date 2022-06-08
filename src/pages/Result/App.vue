<template>
  <div>

    <Header/>

    <div class="dark">
      <div class="container">
        <div class="title">
          订单详情
        </div>
      </div>
    </div>

    <div class="result">
      <div class="container">
        <el-descriptions :column="1" :border="true" :colon="true" label-class-name="des-label">
          <el-descriptions-item label="订单号:">{{ orderInfo['orderCode'] }}</el-descriptions-item>
          <el-descriptions-item label="订单金额:">{{ orderInfo['payAmount'] }}</el-descriptions-item>
          <el-descriptions-item label="订单备注:">{{ orderInfo['orderRemark'] }}</el-descriptions-item>
          <el-descriptions-item label="有效期:">{{ orderInfo['validDate'] }} {{orderInfo['validDateUnitDesc']}}
          </el-descriptions-item>
          <el-descriptions-item label="可绑定设备:">{{ orderInfo['bindQty'] }} 台</el-descriptions-item>
          <el-descriptions-item label="激活码:">
            {{orderInfo['activeCode']}}
            <el-tooltip v-if="!!orderInfo['activeCode']" content="拷贝" placement="top">
              <el-button type="text"
                         v-clipboard:copy="orderInfo['activeCode']"
                         v-clipboard:success="onCopySuccess"
                         v-clipboard:error="onCopyError">
                <i class="el-icon-document-copy" style="cursor: pointer"></i>
              </el-button>
            </el-tooltip>
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </div>

    <div>
      <div class="container">
        <el-divider></el-divider>
      </div>
    </div>

    <Footer/>

  </div>
</template>

<script>

import Api from "../../api/Api";

export default {
  name: 'Result',
  components: {
    Header: () => import(/* webpackChunkName: 'header' */ '../../components/Header.vue'),
    Footer: () => import(/* webpackChunkName: 'footer' */ '../../components/Footer.vue')
  },
  metaInfo: {
    title: '订单详情'
  },
  data() {
    return {
      orderInfo: {}
    }
  },
  mounted() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    })
    this.orderCode = params['orderCode']
    this._getResult()
  },
  methods: {
    onCopySuccess() {
      this.$message({
        message: '拷贝成功',
        type: 'success',
        center: true
      })
    },
    onCopyError() {
      this.$message({
        message: '拷贝失败',
        type: 'error',
        center: true
      })
    },
    async _getResult() {
      const _loading = this.$loading({
        lock: true,
        text: '请求中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.6)'
      })
      try {
        this.orderInfo = await Api.PayOrderApi.getResult(this.orderCode)
      } catch (err) {
        this.$message({
          message: err,
          type: 'error',
          center: true
        })
      }
      _loading.close()
    }
  }
}
</script>

<style lang="less">
@import url('../../styles/global.css');
@import url('../../styles/iconfont.css');

.title {
  padding: 10px 0;
  font-size: 18px;
  text-align: center;
  letter-spacing: 2px;
  color: #8c8c8c;
}

.result {
  padding: 10px;
}

.des-label {
  width: 45%;
}

</style>
