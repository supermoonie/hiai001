<template>
  <div>
    <div class="dark">
      <div class="container">
        <div class="title">
          支付中
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
<!--                    :xl="12" style="padding: 10px;">-->
<!--              <el-button type="primary" round size="small"><i class="iconfont icon-zhifubaozhifu"></i></el-button>-->
<!--            </el-col>-->
            <el-col :xs="24" :sm="24" :md="24" :lg="24"
                    :xl="24" style="padding: 10px;">
              <el-button type="success" round size="mini"><i class="iconfont icon-weixinzhifu"></i></el-button>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col style="padding: 10px;">
              <el-button round>查询支付结果</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <Copyright/>
  </div>
</template>

<script>

import httpClient from "../../util/HttpClient";

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
      bindQty: 1
    }
  },
  mounted() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    })
    this.createOrder(params.appCode, params.cardId, params.cardPrice)
  },
  methods: {
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

</style>
