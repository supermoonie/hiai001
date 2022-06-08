<template>
  <div>
    <div class="dark">
      <div class="container">
        <div class="title">
          订单确认
        </div>
      </div>
    </div>

    <div style="padding: 30px 0;">
      <div class="container">
        <div class="order-info">
          <div class="shopping-cart">
            <el-button icon="el-icon-shopping-cart-full" circle type="info" size="small"></el-button>
          </div>
          <div class="shopping-text">
            需付款
          </div>
          <div class="shopping-price">
            <i class="rmb">￥ </i>
            <i class="price">{{ totalPrice }}</i>
          </div>
          <el-row :gutter="20">
            <el-col :span="12" class="order-info-item-key">订单号:</el-col>
            <el-col :span="12" class="order-info-item-value">{{ orderCode }}</el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12" class="order-info-item-key">订单备注:</el-col>
            <el-col :span="12" class="order-info-item-value">{{ orderRemark }}</el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12" class="order-info-item-key">可绑定设备:</el-col>
            <el-col :span="12" class="order-info-item-value"> {{ bindQty }} 台</el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="dark">
      <div class="container">
        <div class="pay-type">
          <el-row :gutter="20">
            <!--            <el-col :xs="24" :sm="12" :md="12" :lg="12"-->
            <!--                    :xl="12" style="padding: 10px 10px 0 10px;">-->
            <!--              <el-button type="primary" round size="mini"><i class="iconfont icon-zhifubaozhifu"></i></el-button>-->
            <!--            </el-col>-->
            <el-col :xs="24" :sm="24" :md="24" :lg="24"
                    :xl="24" style="padding: 10px;">
              <el-button type="success" round size="mini" @click="handlePay"><i class="iconfont icon-weixinzhifu"></i>
              </el-button>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col style="padding: 0 10px 10px 10px;">
              <el-button round>查询支付结果</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <Copyright/>

    <el-drawer
        :title="`请使用${payTypeDesc}扫码支付`"
        :close-on-press-escape="false"
        :destroy-on-close="false"
        :wrapperClosable="false"
        :withHeader="true"
        :modal="true"
        :modal-append-to-body="true"
        :size="'60%'"
        :visible.sync="payDrawer"
        :direction="payDirection"
        :before-close="handlePayClose">
      <div class="qr-content">
        <qr-code style="max-width: 256px;" :text="codeUrl"></qr-code>
      </div>
    </el-drawer>

  </div>
</template>

<script>

import httpClient from "../../util/HttpClient";
import Api from "@/api/Api"

export default {
  name: 'Confirm',
  components: {
    Copyright: () => import(/* webpackChunkName: 'copyright' */ '../../components/Copyright.vue')
  },
  metaInfo: {
    title: '订单确认'
  },
  data() {
    return {
      totalPrice: '',
      orderCode: '',
      orderRemark: '',
      bindQty: 1,
      payDrawer: false,
      payDirection: 'btt',
      payCode: '',
      payAmount: '',
      payType: 0,
      payTypeDesc: '',
      codeUrl: '',
      interval: undefined
    }
  },
  mounted() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    })
    this.createOrder(params['appCode'], params['cardId'], params['cardPrice'])
  },
  methods: {
    async handlePayClose() {
      this.interval && clearInterval(this.interval)
      let status = await Api.PayOrderApi.getPayOrderStatus(this.orderCode, 1)
      console.log(status)
      status && (location.href = `result.html?payCode=${this.payCode}`)
      this.payDrawer = false
    },
    async handlePay() {
      this.interval && clearInterval(this.interval)
      await this.createPayOrder()
      this.interval = setInterval(async () => {
        let status = await Api.PayOrderApi.getPayOrderStatus(this.orderCode, 1)
        console.log(status)
        status && clearInterval(this.interval) && (location.href = `result.html?payCode=${this.payCode}`)
      }, 1000)
    },
    async createPayOrder() {
      const _loading = this.$loading({
        lock: true,
        text: '请求中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.6)'
      })
      let data = await Api.PayOrderApi.createPayOrder(this.orderCode, 1)
      console.log(data)
      this.payCode = data['payCode']
      this.payAmount = data['payAmount']
      this.payType = data['payType']
      this.payTypeDesc = data['payTypeDesc']
      this.codeUrl = data['codeUrl']
      this.payDrawer = true
      _loading.close();
    },
    createOrder(appCode, cardId, cardPrice) {
      const _loading = this.$loading({
        lock: true,
        text: '下单中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.6)'
      })
      httpClient.postForm('/fast-cut/order/create', {
        'appCode': appCode,
        'cardId': cardId,
        'cardPrice': cardPrice
      }).then(data => {
        console.log(data)
        this.totalPrice = data['totalPrice']
        this.orderCode = data['orderCode']
        this.orderRemark = data['orderRemark']
        this.bindQty = data['bindQty']
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
  padding: 10px 0;
  font-size: 18px;
  text-align: center;
  letter-spacing: 2px;
  color: #8c8c8c;
}

.order-info {
  padding: 10px 0;

  .shopping-cart {
    width: 100%;
    text-align: center;

    .el-button--info {
      background-color: #dddddd;
      border-color: #dddddd;
    }

    .el-icon-shopping-cart-full {
      color: #8c8c8c;
      font-size: 16px;
      font-weight: 400;
    }
  }

  .shopping-price {
    width: 100%;
    padding: 10px 0;
    text-align: center;
    color: #1c2139;

    .rmb {
      font-size: 14px;
      font-style: normal;
    }

    .price {
      font-size: 24px;
      font-style: normal;
    }
  }

  .shopping-text {
    width: 100%;
    padding: 10px 0;
    text-align: center;
    color: #8c8c8c;
    font-size: 12px;
  }

  .el-row {
    padding: 5px 0;
  }

  .order-info-item-key {
    height: 22px;
    line-height: 22px;
    color: #8c8c8c;
    font-size: 16px;
    text-align: right;
  }

  .order-info-item-value {
    height: 22px;
    line-height: 22px;
    color: #000000;
    font-size: 14px;
    text-align: left;
  }
}

.pay-type {
  width: 100%;

  .el-button {
    width: 100%;
  }

  .iconfont {
    font-size: 22px;
  }
}

.qr-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.el-drawer__container {
  background-color: rgba(0, 0, 0, 0.6);
}

.el-drawer__header {
  margin-bottom: 10px;

  span {
    text-align: center;
  }

  .el-drawer__close-btn {
    position: absolute;
    right: 10px;
  }
}

.el-drawer__body {
  border-top: solid #ccc 1px;
}

</style>
