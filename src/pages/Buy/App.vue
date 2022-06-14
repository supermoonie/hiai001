<template>
  <div>
    <Header :current="'buy'"/>

    <div class="dark">
      <div class="container" style="padding: 30px 16px">
        <el-row type="flex" justify="center" align="middle">
          <el-col>
            <div class="app-desc">
              {{ appName }} {{ appDesc }}
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" v-for="(cardInfo, index) in cardInfos" :key="index" :sm="span" :md="span" :lg="span"
                  :xl="span" style="padding: 10px;">
            <el-card shadow="hover">
              <div class="card-name">{{ cardInfo['cardName'] }}</div>
              <div class="card-desc">{{ cardInfo['cardDesc'] }} | {{ cardInfo['cardRemark'] }}</div>
              <div class="valid-date">
                有效期：{{ cardInfo['validDate'] }}{{ cardInfo['validDateUnitDesc'] }}
                <i class="valid-date-desc">(自激活日开始计算)</i>
              </div>
              <div class="bind-qty">
                可绑定设备数量：{{ cardInfo['bindQty'] }} 台
              </div>
              <div class="card-price">
                <i class="rmb">￥ </i>{{ cardInfo['cardPrice'] }}
                <i class="card-market-price" v-if="cardInfo['cardPrice'] < cardInfo['marketPrice']">
                  <i class="rmb">￥ </i>{{ cardInfo['marketPrice'] }}
                </i>
              </div>
              <div class="buy">
                <el-link :underline="false"
                         :href="`confirm.html?appCode=${appCode}&cardId=${cardInfo['cardId']}&cardPrice=${cardInfo['cardPrice']}`"
                         target="_blank">
                  <el-button type="primary" size="medium" icon="el-icon-shopping-cart-full" round>购 买
                  </el-button>
                </el-link>
              </div>
            </el-card>
          </el-col>
        </el-row>
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

    <div style="max-width: 1056px; margin: 0 auto;">
      <el-divider></el-divider>
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
  data() {
    return {
      supportQr: require('../../assets/support-qr.jpg'),
      appCode: '',
      appName: '',
      appDesc: '',
      cardInfos: [],
      span: 12,
    }
  },
  mounted() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    })
    this.appCode = params['appCode']
    this._getAppWithCardInfo()
  },
  methods: {
    _getAppWithCardInfo() {
      const _loading = this.$loading({
        lock: true,
        text: '加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.6)'
      })
      httpClient.get(`/fast-cut/app/info?appCode=${this.appCode}`).then(data => {
        if (!data) return
        this.appCode = data['appCode']
        this.appName = data['appName']
        this.appDesc = data['appDesc']
        this.cardInfos = data['cardInfos']
        this.span = Math.floor(24 / this.cardInfos.length)
      }).catch(err => {
        this.$message({
          message: err,
          type: 'error',
          center: true
        })
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

.app-desc {
  width: 100%;
  text-align: center;
  font-size: 42px;
  color: #172b4d;
  letter-spacing: 2px;
  padding: 0 0 20px 0;
  font-weight: bold;
}

.card-name {
  width: 100%;
  text-align: center;
  font-size: 22px;
  color: #172b4d;
  letter-spacing: 2px;
  font-weight: bold;
  padding: 10px 0;
}

.card-desc {
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: #172b4d;
  letter-spacing: 2px;
  padding: 10px 0;
}

.card-price {
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: #172b4d;
  letter-spacing: 2px;
  padding: 10px 0;
}

.valid-date {
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: #172b4d;
  letter-spacing: 2px;
  padding: 10px 0;
}

.valid-date-desc {
  font-size: 12px;
  font-style: normal;
}

.bind-qty {
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: #172b4d;
  letter-spacing: 2px;
  padding: 10px 0;
}

.rmb {
  font-style: normal;
  font-size: 24px;
}

.card-price {
  width: 100%;
  text-align: center;
  font-size: 32px;
  color: cornflowerblue;
  letter-spacing: 2px;
  padding: 10px 0;

  .card-market-price {
    font-size: 24px;
    font-style: normal;
    text-decoration: line-through;
  }
}

.buy {
  width: 100%;
  text-align: center;
  padding: 10px 0;

  a {
    width: 100%;

    .el-link--inner {
      width: 100%;

      button {
        width: 100%;
      }

      .el-button--primary {
        background-color: cornflowerblue;
        border-color: cornflowerblue;

        &:hover {
          background-color: #409EFF;
          border-color: #409EFF;
        }
      }
    }
  }


}

.faq-title {
  font-size: 16px;
  color: #333333;
  font-weight: bold;
}

.faq-content {
  padding-left: 10px;

  .faq-item {
    font-size: 16px;
    color: #7f8c8d;
  }
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
