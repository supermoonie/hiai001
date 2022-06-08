<template>
  <div>
    <Header/>

    <div class="dark">
      <div class="container">
        <div class="title">
          找回激活码
        </div>
      </div>
    </div>

    <div class="find">
      <div class="container">
        <el-input placeholder="请输入订单号" v-model="orderCode">
          <template slot="prepend">订单号:</template>
          <el-button slot="append" icon="el-icon-search" @click="find"></el-button>
        </el-input>
      </div>
    </div>

    <div>
      <div class="container">
        <el-row>
          <el-descriptions :column="1" :border="true" :colon="true" labelClassName="des-label">
            <el-descriptions-item label="订单号:">{{ orderInfo['orderCode'] }}</el-descriptions-item>
            <el-descriptions-item label="订单金额:">{{ orderInfo['payAmount'] }}</el-descriptions-item>
            <el-descriptions-item label="订单备注:">{{ orderInfo['orderRemark'] }}</el-descriptions-item>
            <el-descriptions-item label="有效期:">{{ orderInfo['validDate'] }} {{orderInfo['validDateUnitDesc']}}
            </el-descriptions-item>
            <el-descriptions-item label="可绑定设备:">{{ !!orderInfo['bindQty'] ? orderInfo['bindQty'] + '台' : ''}} </el-descriptions-item>
            <el-descriptions-item label="激活码:">
              {{orderInfo['activeCode']}}
              <el-tooltip v-if="!!orderInfo['activeCode']" content="拷贝" placement="top">
                <el-button type="text"
                           :disabled="disable"
                           :loading="disable"
                           v-clipboard:copy="orderInfo['activeCode']"
                           v-clipboard:success="onCopySuccess"
                           v-clipboard:error="onCopyError">
                  <i class="el-icon-document-copy" style="cursor: pointer"></i>
                </el-button>
              </el-tooltip>
            </el-descriptions-item>
          </el-descriptions>
        </el-row>
      </div>
    </div>

    <div>
      <div class="container">
        <el-row>
          <el-col>
            <p class="find-order-code">订单号找回方式</p>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <div class="find-img">
              <img src="../../assets/wechat-find.jpg" style="width: 100%" alt="微信商户单号">
            </div>
          </el-col>
          <!--          <el-col :span="12">-->
          <!--            <img src="../../assets/wechat-find.jpg" style="width: 100%" alt="支付宝商户单号">-->
          <!--          </el-col>-->
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

import Api from "../../api/Api"

export default {
  name: 'Find',
  metaInfo: {
    title: '找回激活码'
  },
  components: {
    Header: () => import(/* webpackChunkName: 'header' */ '../../components/Header.vue'),
    Footer: () => import(/* webpackChunkName: 'footer' */ '../../components/Footer.vue')
  },
  data() {
    return {
      orderCode: '',
      disable: false,
      orderInfo: {}
    }
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
    async find() {
      if ('' === this.orderCode) {
        this.$message({
          message: '请输入订单号',
          type: 'error',
          center: true
        })
        return
      }
      this.disable = true
      try {
        this.orderInfo = await Api.PayOrderApi.getResult(this.orderCode)
      } catch (err) {
        this.$message({
          message: err,
          type: 'error',
          center: true
        })
      }
      this.disable = false
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

.find {
  padding: 10px;
}

.find-img {
  width: 80%;
  margin: 0 auto;
  padding: 16px;
  border: #cccccc solid 1px;
  border-radius: 5px;
}

.find-order-code {
  width: 100%;
  letter-spacing: 2px;
  color: #333333;
  font-size: 18px;
  text-align: center;
  padding: 10px 0;
}

.des-label {
  width: 45%;
}

</style>
