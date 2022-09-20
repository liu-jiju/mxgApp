<template>
 <view class="banner-box"
    :style="`background-image: linear-gradient(to bottom, ${headerBackground}, ${headerBackground}, #fff);`">
 
    <swiper class="banner-swiper" indicator-active-color="#fff" indicator-color="#ffffff55"
 
     :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500" @change="changeSwiper">
     <swiper-item v-for="item in navData" :key="item.id">
      <image class="swiper-image" :src="item.imageUrl"></image>
     </swiper-item>
    </swiper>
   </view>
</template>

<script>
import { getSwiper } from '@/api/index.js';
import { ref, reactive, toRefs } from 'vue';
export default {
 name: 'mxg-banner',
 setup() {
   const changeSwiper = (cur) => {
   data.headerBackground = data.navData[cur.detail.current].background
  }
  const data = reactive({
   // 定义一个数组
   navData: [],
   headerBackground:'#006c00',
  });
  // 获取请求的连接
  getSwiper().then(res => {
   // console.log(res, 111111111111);
   // 进行赋值
   data.navData = res.data;
  });
  // 返回data
  return {
   ...toRefs(data),
   changeSwiper,
  };
 }
};
</script>

<style lang="scss">
.banner-swiper {
  height: 175px;
 }

 .swiper-image {
  width: 345px;
  height: 175px;
  border-radius: 8px;
 }

 .banner-box {
  padding-top: 60px;
  text-align: center;
 }

</style>