<template>
  <div>
    <Header :current="'index'"/>

    <div class="dark">
      <div class="container">
        <div class="main">
          <div class="slogan">
            <div class="title">新一代视频智能编辑平台</div>
            <div class="description">把复杂的视频编辑工作一键化，人人都是视频处理专家</div>
            <div class="description">拥有属于自己的原创视频</div>
            <div class="btns">
              <div id="main-download" class="btn main-download">
                <el-link href="https://www.123pan.com/s/Iw4DVv-LjSq3" target="_blank" :underline="false" style="color: #ffffff;">下载 ...</el-link>
              </div>
              <div class="btn light" @click="watchVideo">观看视频</div>
            </div>
            <div id="version"></div>
          </div>
          <div class="video">
            <img src="../../assets/video-play-1.png" @click="watchVideo" alt="">
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="container">
        <div class="fastcut-input">
          <div class="content-title">简单又好用的批量视频剪辑平台</div>
          <div class="content-desc">支持Windows、Macos</div>
          <br>
          <video muted="" autoplay="" loop="" src="../../assets/home_page-2.mp4"
                 style=" max-width: 950px; width: 100%;">
            你的浏览器不支持 <code>video</code> 标签.
          </video>
        </div>
      </div>
    </div>

    <div class="dark">
      <div class="container">
        <div class="fastcut-input">
          <div class="content-title">自动主题，白天不知夜的黑</div>
          <div class="content-desc"><span id="option">拥有明亮、暗黑两种主题</span><br>
            自动跟随系统主题变化，让黑夜不再刺眼
          </div>
<!--          <img style=" max-width: 912px; width: 100%;" src="../../assets/dark_light.png" alt="">-->
          <div class="fastcut-panel-img">
            <el-image :src="darkImage" :preview-src-list="[darkImage, lightImage]"></el-image>
            <el-image :src="lightImage" :preview-src-list="[darkImage, lightImage]"></el-image>
<!--            <img src="../../assets/dark.jpg" alt="dark">-->
<!--            <img src="../../assets/light.png" alt="light">-->
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="container">
        <div class="fastcut-input">
          <div class="content-title">用户评价</div>
          <el-carousel trigger="click" type="card" :loop="true" :autoplay="false" class="slide" height="215px">
            <el-carousel-item v-for="(item, index) in comments" :key="index">
              <div class="say">{{ item.say }}</div>
              <div class="who">{{ item.who }}</div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>

    <div class="dark" id="download">
      <div class="container">
        <div class="platform">

          <div>
            <div class="logo iconfont icon-windows"></div>
            <div class="remark">Windows 7, 10, 11</div>
            <div>
              <div class="download">
                <el-link href="https://www.123pan.com/s/Iw4DVv-ijSq3" :underline="false" target="_blank">Windows 64 位版本</el-link>
              </div>
            </div>
          </div>
          <div>
            <div class="logo iconfont icon-apple"></div>
            <div class="remark">macOS 10.10+</div>
            <div class="download">
              <el-link href="https://www.123pan.com/s/Iw4DVv-zjSq3" :underline="false" target="_blank">MacOS 版本</el-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer/>

    <div class="qp mask" style="display: none;" @click="closeVideo"></div>
    <div class="qp close-video" style="display: none;"><img src="../../assets/close.png" @click="closeVideo" style="width: 30px; cursor: pointer;" alt=""></div>
    <div class="qp watch-video" style="display: none;">
      <video id="media" poster="../../assets/video-play-1.png"
             src="../../assets/fastcut-H264.mp4" controls="">
        你的浏览器不支持 <code>video</code> 标签.
      </video>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  metaInfo: {
    title: '快剪官网 - 新一代批量视频剪辑平台'
  },
  data: () => {
    return {
      darkImage: require('../../assets/dark.png'),
      lightImage: require('../../assets/light.png'),
      comments: [
        {
          say: "虚位以待",
          who: "虚位以待"
        },
        {
          say: "虚位以待",
          who: "虚位以待"
        },
        {
          say: "虚位以待",
          who: "虚位以待"
        },
        {
          say: "虚位以待",
          who: "虚位以待"
        }
      ]
    }
  },
  methods: {
    watchVideo: () => {
      document.querySelectorAll('.qp').forEach((item) => {
        item.style.display = ''
      })
      document.getElementById("media").play();
    },
    closeVideo: () => {
      document.querySelectorAll('.qp').forEach((item) => {
        item.style.display = 'none'
      })
      document.getElementById("media").pause();
    }
  },
  components: {
    Header: () => import(/* webpackChunkName: 'header' */ '../../components/Header.vue'),
    Footer: () => import(/* webpackChunkName: 'footer' */ '../../components/Footer.vue')
  }
}
</script>

<style lang="less">
@import url('../../styles/global.css');
@import url('../../styles/iconfont.css');
.fastcut-panel-img {
  img {
    padding: 5px;
    max-width: 480px;
  }
}
</style>
