<template>
  <div id="app">
    <router-view />
<!--    <div class="music" :class="IsMusicPlay ? 'musicAni' : ''" v-show="IsMusic" @click="watchMusicState"><img src="@/assets/image/music.png" /></div>
    <audio :src="mus" class="media-audio" loop autoplay ref="MusicPlay"></audio> -->
  </div>
</template>
<script>
import Http from '@/assets/js/http.js';
import wxApi from '@/assets/js/index.js';
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      // mus: require('@/assets/mp3/1.mp3'), //使用的音频
      // IsMusic: true,
      // IsMusicPlay: false,
      option: {
        title: 'h5', // 分享标题
        desc: 'h5', // 分享描述
        link: 'http://www.haoweisys.com/csj/', // 分享链接
        imgUrl: 'http://www.haoweisys.com/csj/share.jpg', // 分享图标
        success: () => {
          //成功
        },
        error: () => {
          //失败
        }
      }
    };
  },
  watch: {
    // 方法1
    // $route(to, from) {
    //   //监听路由是否变化
    //   console.log(to.path);
    //   if (to.path == '/index') {
    //     //跳转到哪个页面
    //     this.IsMusic = true;
    //   } else {
    //     this.IsMusic = false;
    //   }
    // }
  },
  mounted() {
    //分享功能
    // const WeiChar = p => Http.post('http://www.haoweisys.com/fantasy/Haobo/index/share_a', p);
    // WeiChar({
    //   url: location.href.split('#')[0]
    // }).then(res => {
    //   let data = typeof res != 'object' ? JSON.parse(res) : res;
    //   wxApi.wxRegister(data, this.option);
    // });

    // let _this = this;
    // //--创建页面监听，等待微信端页面加载完毕 触发音频播放
    // document.addEventListener('DOMContentLoaded', function() {
    //   function audioAutoPlay() {
    //     document.addEventListener(
    //       'WeixinJSBridgeReady',
    //       function() {
    //         _this.musicPlay();
    //         _this.IsMusicPlay = true;
    //       },
    //       false
    //     );
    //   }
    //   audioAutoPlay();
    // });
    // _this.musicPlay();
  },
  methods: {
    // watchMusicState() {
    //   let _this = this;
    //   let $audio = this.$refs.MusicPlay; //获取音乐DOM节点
    //   // console.log($audio);
    //   if ($audio.paused) {
    //     // 暂停中
    //     // console.log(2);
    //     this.musicPlay();
    //     this.IsMusicPlay = true;
    //   } else {
    //     // 播放中
    //     // console.log(1);
    //     this.musicPause();
    //     this.IsMusicPlay = false;
    //   }
    // },
    // /**
    //  * 暂停音乐并停止旋转
    //  */
    // musicPause() {
    //   this.$refs.MusicPlay.pause();
    //   // this.musicTF = true;
    // },
    // /**
    //  * 播放音乐并开始旋转
    //  */
    // musicPlay() {
    //   this.$refs.MusicPlay.play();
    //   // this.IsMusic = false;
    // }
  }
};
</script>
<style lang="scss">
// .music {
//   width: 50px;
//   height: 50px;
//   position: fixed;
//   top: 40px;
//   right: 30px;
//   z-index: 99;
//   border-radius: 100%;
//   background-color: white;
// }
// .musicAni {
//   -webkit-animation: animal 5s infinite linear;
//   -webkit-transform-origin: center center;
//   -ms-transform-origin: center center;
//   transform-origin: center center;
// }
// @-webkit-keyframes animal {
//   0% {
//     transform: rotate(0deg);
//     -ms-transform: rotate(0deg);
//     -webkit-transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(-360deg);
//     -ms-transform: rotate(-360deg);
//     -webkit-transform: rotate(-360deg);
//   }
// }
</style>
