<template>
  <view class="content">
    <!-- 1.写一个搜索框  2.点击搜索框实现跳转  3.搜索框禁用 -->
    <searchInput/>
    <!-- 轮播图 -->
    <view class="wrap">
      <u-swiper :list="data.list" name="image_src" height="340"></u-swiper>
    </view>
    <!-- 分类 -->
    <view>
      <u-grid :col="4" :border="false">
        <u-grid-item v-for="(item,index) in data.cateList" :key="index">
          <u-image width="74px" height="80px" :src="item.image_src"></u-image>
          <!-- <image :src="item.image_src"></image> -->
          <!-- <view class="grid-text">{{item.name}}</view> -->
        </u-grid-item>
      </u-grid>
    </view>
    <!-- 热区 -->
    <HomeFloder/>
  </view>
</template>

<script lang="ts" setup>
import HomeFloder from './components/HomeFloder.vue';
import SearchInput from '@/components/searchInput/searchinput.vue'
import { getSwiper,getCate } from '@/api/api';
import * as TS from '@/api/define';
import { reactive } from 'vue';

//轮播图
let data: {
  list: TS.SwiperRes[];
  cateList: TS.Catelist;
} = reactive({
  list: [], //轮播图
  cateList: [] //导航栏
});

//轮播图
getSwiper().then(res=>{
  data.list = res.message;
  // console.log(data.list);
});
//导航栏
getCate().then(res =>{
  if(res.meta.status === TS.Code.SUCCESS){
    data.cateList = res.message;
    console.log(res,'导航栏');
  }else{
    uni.showToast({
      title:'res.meta.msg',
      icon: 'error'
    })
  }
})
</script>

<style lang="scss" scoped>
  .u-col{
    padding: 0 !important;
  }
  .wrap{
    width: 100%;
    height: 340rpx;
    
  }


  .grid-text {
    font-size: 28rpx;
    margin-top: 4rpx;
    color: $u-type-info;
  }
  
</style>
