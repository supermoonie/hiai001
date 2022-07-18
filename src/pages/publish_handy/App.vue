<template>
  <div>
    <Header :active-index="'5'" />

    <div class="dark">
      <div class="container">
        <el-row>
          <el-col class="hidden-xs-only" style="margin-top: 30px;">&nbsp;</el-col>
        </el-row>
        <el-row class="container-top">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <el-row class="title">
              <el-col>
                随手发｜多账号批量视频发布
              </el-col>
            </el-row>
            <div class="description">支持抖音、头条、西瓜视频一键批量发布</div>
            <div class="description">更多平台即将支持...</div>
            <el-link class="download-btn" href="#" target="_self" :underline="false">
              <el-button>开放下载...</el-button>
            </el-link>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <el-image class="splash" :src="publishHandy"></el-image>
          </el-col>
        </el-row>
        <el-row>
          <el-col hidden-xs-only style="margin-top: 30px;">&nbsp;</el-col>
        </el-row>
      </div>
    </div>

    <div>
      <div class="container">
        <div class="container-banner">
          <el-row>
            <el-col class="banner-title">多平台、多账号、多视频</el-col>
          </el-row>
          <el-row>
            <el-col class="banner-desc">一键批量发布</el-col>
          </el-row>
          <el-row>
            <el-col class="banner-desc">支持Windows、Macos、Android</el-col>
          </el-row>
          <el-row style="margin-top: 20px;" :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
              <el-image :src="publishHandy2" :preview-src-list="[publishHandy2, publishHandy3]">
              </el-image>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
              <el-image :src="publishHandy3" :preview-src-list="[publishHandy2, publishHandy3]">
              </el-image>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="dark" id="download">
      <div class="container">
        <div class="container-banner">
          <el-row>
            <el-col class="banner-title">简单又好用的短视频批量发布工具</el-col>
          </el-row>
          <el-row>
            <el-col class="banner-desc"><i class="el-icon-circle-check" style="color: rgb(133, 206, 97);"></i>
              支持Windows、Macos、Android
            </el-col>
          </el-row>
        </div>
        <div class="platform">
          <div>
            <div class="logo iconfont icon-anzhuo"></div>
            <div class="remark">Android 4.0 +</div>
            <div>
              <div class="download">
                <el-link href="#" :underline="false" target="_self">安卓(敬请期待)
                </el-link>
              </div>
            </div>
          </div>
          <div>
            <div class="logo iconfont icon-windows"></div>
            <div class="remark">Windows 7, 10, 11</div>
            <div>
              <div class="download">
                <el-link href="#" :underline="false" target="_self">Windows 64
                  位版本(敬请期待)
                </el-link>
              </div>
            </div>
          </div>
          <div>
            <div class="logo iconfont icon-apple"></div>
            <div class="remark">macOS 10.10+</div>
            <div class="download">
              <el-link href="#" :underline="false" target="_self">敬请期待
              </el-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
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
    title: '随手发｜多账号批量视频发布',
    keywords: '随手发，随手发官网，抖音一键发布，头条一键发布，西瓜一键发布，一键发布，多账号发布',
    description: '随手发，多账号批量视频发布'
  },
  data() {
    return {
      publishHandy: require('../../assets/publish_handy_1.png'),
      publishHandy2: require('../../assets/publish_handy_2.png'),
      publishHandy3: require('../../assets/publish_handy_3.png')
    }
  }
}
</script>

<style lang="less">
@import url('../../styles/global.css');
@import url('../../styles/iconfont.css');

.container-top {
  padding: 0 18px;

  .title {
    margin-top: 20px;
    font-size: 28px;
    color: #172b4d;
    padding: 10px 0;
    letter-spacing: 2px;
    font-weight: 600;
  }

  .description {
    font-size: 18px;
    color: #505f79;
  }
}

.download-btn {
  margin: 36px 0;

  .el-button {
    background-color: #224170;
    color: #fff;
    font-size: 16px;

    &:hover {
      background-color: #264980;
    }
  }
}

.container-banner {
  width: 100%;
  padding: 16px 0;

  .banner-title {
    font-size: 32px;
    color: #172b4d;
    padding: 20px 0;
    text-align: center;
  }

  .banner-desc {
    font-size: 16px;
    color: #505f79;
    line-height: 1.75;
    text-align: center;
  }
}

.screenshot {
  width: 800px;
  margin: 10px auto;
  display: block;
}

.el-image image {
  cursor: default;
}

.iconfont {
  font-size: 72px;
}
</style>
