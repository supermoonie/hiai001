<template>
  <div>
    <Header :active-index="'2'"/>

    <div class="dark">
      <div class="container">
        <el-row>
          <el-col class="hidden-xs-only" style="margin-top: 30px;">&nbsp;</el-col>
        </el-row>
        <el-row class="container-top">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <el-row class="title">
              <el-col>
                快下载｜短视频批量去水印下载
              </el-col>
            </el-row>
            <div class="description">支持抖音、YouTube、TikTok、快手、火山、西瓜视频</div>
            <div class="description">等众多短视频平台</div>
            <el-link class="download-btn" href="https://www.123pan.com/s/Iw4DVv-NTlq3" target="_blank"
                     :underline="false">
              <el-button>下载 ...</el-button>
            </el-link>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <el-image class="splash" :src="fastDownloaderSplash"></el-image>
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
            <el-col class="banner-title">自动主题，白天不知夜的黑</el-col>
          </el-row>
          <el-row>
            <el-col class="banner-desc">拥有明亮、暗黑两种主题</el-col>
          </el-row>
          <el-row>
            <el-col class="banner-desc">自动跟随系统主题变化，让黑夜不再刺眼</el-col>
          </el-row>
          <el-row style="margin-top: 20px;" :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
              <el-image :src="fastDownloaderDark"
                        :preview-src-list="[fastDownloaderDark, fastDownloaderLight]"></el-image>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
              <el-image :src="fastDownloaderLight"
                        :preview-src-list="[fastDownloaderLight, fastDownloaderDark]"></el-image>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="dark" id="download">
      <div class="container">
        <div class="container-banner">
          <el-row>
            <el-col class="banner-title">简单又好用的批量去水印下载工具</el-col>
          </el-row>
          <el-row>
            <el-col class="banner-desc"><i class="el-icon-circle-check" style="color: rgb(133, 206, 97);"></i>
              支持Windows、Macos
            </el-col>
          </el-row>
        </div>
        <div class="platform">
          <div>
            <div class="logo iconfont icon-windows"></div>
            <div class="remark">Windows 7, 10, 11</div>
            <div>
              <div class="download">
                <el-link href="https://www.123pan.com/s/Iw4DVv-0Tlq3" :underline="false" target="_blank">Windows 64
                  位版本
                </el-link>
              </div>
            </div>
          </div>
          <div>
            <div class="logo iconfont icon-apple"></div>
            <div class="remark">macOS 10.10+</div>
            <div class="download">
              <el-link href="https://www.123pan.com/s/Iw4DVv-DTlq3" :underline="false" target="_blank">MacOS 版本
              </el-link>
            </div>
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
  },
  data() {
    return {
      fastDownloaderSplash: require('../../assets/FastDownloaderSplash.png'),
      fastDownloaderDark: require('../../assets/FastDownloaderDark.png'),
      fastDownloaderLight: require('../../assets/FastDownloaderLight.png')
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
