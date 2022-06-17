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
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" style="padding: 10px;">
            <el-card shadow="never" style="height: 227px">
              <div class="faq-title">常见问题：</div>
              <div class="faq-content">
                <p class="faq-item">
                  1、请妥善保管卡号，勿泄露给他人
                </p>
                <p class="faq-item">
                  2、卡号未激活，可联系客服进行退款
                </p>
                <p class="faq-item">
                  3、电脑重装系统，相当于更换设备
                </p>
                <p class="faq-item">
                  4、如遇到任何问题，请联系客服解决
                </p>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" style="padding: 10px;">
            <el-card shadow="never">
              <el-row type="flex" justify="center" align="middle">
                <el-col :span="12">
                  <el-image :src="supportQr" alt="" fit="fill" class="support-qr"></el-image>
                </el-col>
                <el-col :span="12">
                  <p class="support-desc">扫描二维码</p>
                  <p class="support-desc">添加客服</p>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
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
      supportQr: require('../../assets/support-qr.png'),
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
  width: 50%;
}

.support-qr {
  width: auto;
  height: 183px;
}

.support-desc {
  font-size: 16px;
  color: #333333;
}

</style>
