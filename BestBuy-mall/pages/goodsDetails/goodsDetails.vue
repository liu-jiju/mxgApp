<template>
  <view>
    <!-- 轮播图 -->
    <u-swiper :list="list"></u-swiper>
  </view>
</template>

<script lang="ts">
  import {reactive,toRefs } from 'vue';
  // import { getGoodDetail } from '@/api/api';
  export default {
    name: 'details',
    setup() {
      const info = reactive({
        list: []
      });
      
      return {
        ...toRefs(info)
      };
    },
    onLoad(opt) {
      console.log(opt);
    }
  }
</script>

<style>

</style>
