<template>
  <dv-border-box-11 title="专题活动" class="datav-border-box-content">
    <div class="datav-border-box-content-container">
      <video-player
        class="video-player vjs-big-play-centered"
        src="assets/video/sh.mp4"
        poster="assets/video/shcover.png"
        crossorigin="anonymous"
        playsinline
        controls
        :volume="0.6"
        :playback-rates="[0.7, 1.0, 1.5, 2.0]"
        @mounted="handleMounted"
        @ready="handleEvent($event)"
        @play="handleEvent($event)"
        @pause="handleEvent($event)"
        @ended="handleEvent($event)"
        @loadeddata="handleEvent($event)"
        @waiting="handleEvent($event)"
        @playing="handleEvent($event)"
        @canplay="handleEvent($event)"
        @canplaythrough="handleEvent($event)"
        @timeupdate="handleEvent(player?.currentTime())"
      />
    </div>
  </dv-border-box-11>
</template>
<script lang="ts">
  import { defineComponent, shallowRef } from 'vue';
  import { VideoJsPlayer } from 'video.js';
  import { VideoPlayer } from '@videojs-player/vue';
  import 'video.js/dist/video-js.css';

  export default defineComponent({
    name: 'saq-video',
    title: '水安全视频',
    url: import.meta.url,
    components: {
      VideoPlayer,
    },
    setup() {
      const player = shallowRef<VideoJsPlayer>();
      const handleMounted = (payload: any) => {
        player.value = payload.player;
        console.log('Basic player mounted', payload);
      };

      const handleEvent = (log: any) => {
        console.log('Basic player event', log);
      };

      return { player, handleMounted, handleEvent };
    },
  });
</script>
<style lang="less">
  @import './../../../layouts/layout.less';

  //覆盖组件中的样式，视频显示图片的拉伸
  .vjs-poster img {
    object-fit: cover;
  }

  .video-js .vjs-tech {
    object-fit: cover;
  }
</style>
