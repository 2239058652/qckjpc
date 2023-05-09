<!-- 可用组件 1.https://github.com/surmon-china/videojs-player
可正常播放mp4，不同视频地址：https://github.surmon.me/videojs-player
2.https://github.com/xdlumia/vue3-video-play/ 3.https://github.com/LarchLiu/vue3-video-player
https://cloudgeektech.com/vue3-video-player/ 无法使用 -->
<template>
  <div class="home">
    <!-- <video-player
      class="video-player vjs-big-play-centered"
      src="https://vjs.zencdn.net/v/oceans.mp4"
      poster="https://vjs.zencdn.net/v/oceans.png"
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
    /> -->
    <video-player
      class="video-player vjs-big-play-centered"
      src="../../../../../assets/video/sh.mp4"
      :width="852"
      :height="480"
      poster="../../../../../assets/video/shcover.png"
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
</template>
<script lang="ts">
  import { defineComponent, shallowRef } from 'vue';
  import { VideoJsPlayer } from 'video.js';
  import { VideoPlayer } from '@videojs-player/vue';
  import 'video.js/dist/video-js.css';

  export default defineComponent({
    name: 'vue-basic-player-example',
    title: 'Basic player (Vue)',
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
<style lang="less"></style>
