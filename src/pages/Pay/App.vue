<template>
  <div>
    <div class="dark">
      <div class="container">
        <div class="title">
          支付中...
        </div>
      </div>
    </div>

    <div>
      <div class="container">
        <div class="qr-content">
          <el-row>
            <el-col>
              <qr-code style="max-width: 256px; margin: 10px auto;" text="hello world"></qr-code>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div>
      <div class="container">
        <div class="pay-order">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16" style="padding: 10px;">
              支付流水号: {{ payOrderCode }}
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" style="padding: 10px;">
              支付总金额: ¥{{ totalAmount }}
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div>
      <div class="container">

      </div>
    </div>

    <Copyright/>
  </div>
</template>

<script>

import httpClient from "../../util/HttpClient";

export default {
  name: 'Pay',
  components: {
    Copyright: () => import(/* webpackChunkName: 'copyright' */ '../../components/Copyright.vue')
  },
  metaInfo: {
    title: '支付中...'
  },
  data() {
    return {
      payOrderCode: '2022060700000000006',
      totalAmount: '30',
      codeUrl: 'wechat://pay'
    }
  },
  mounted() {
    // const params = new Proxy(new URLSearchParams(window.location.search), {
    //   get: (searchParams, prop) => searchParams.get(prop),
    // })
    // this.createPayOrder(params.orderCode)
  },
  methods: {
    createPayOrder(orderCode) {
      const _loading = this.$loading({
        lock: true,
        text: '下单中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.6)'
      })
      httpClient.postForm('/fast-cut/pay/order/create', {
        'orderCode': orderCode,
        'payType': 1
      }).then(data => {
        console.log(data)
      }).finally(() => {
        _loading.close()
      })
    },
  }
}
</script>

<style lang="less">
@import url('../../styles/global.css');
@import url('../../styles/iconfont.css');

.title {
  margin-bottom: 10px;
  padding: 10px 0;
  font-size: 18px;
  text-align: center;
  letter-spacing: 2px;
  color: #8c8c8c;
}

.qr-content {
  border: solid #ccc 1px;
  border-radius: 5px;
  padding: 20px;
}

.pay-order {

}

</style>
