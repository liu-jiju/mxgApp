<template>
  <view>
    <view class="address_top">
      <view class="address_top_box">
        <view class="">张三</view>
        <view class="">123</view>
      </view>
      <view class="">北京市</view>
    </view>
    <view class="address_title">购物车</view>
    <view class="goods_box">
      <view class="goods_box_check">
        <label>
          <checkbox :value="checked" />
          <text></text>
        </label>
      </view>
      <view class="goods_box_img">
        <img src="" alt="" srcset=""/>
      </view>
      <view class="goods_box_titles">
        <view class="goods_box_title">23131332</view>
        <view class="">
          <view class="price">123$</view>
          <u-number-box v-model="cartnumber" @change="valChange"></u-number-box>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
let cartnumber = ref(0);
let checked = ref(false);
//放置info.list数据 
/**
 * 1.如果本地有数据，就直接进行渲染数据
 * 2.如果本地没有数据，就做一个判断，添加心仪商品
 * 3.
 * */
uni.getStorage({
  key: 'infoList',
  success(res) {
    let result = res.data;
    console.log(result,'result');
  },
  fail(err) {
    console.log('我是失败的');
  }
})
let valChange = e => {
  console.log('当前值为：'+e.value);
}
</script>

<style lang="scss">
.address_top{
  height: 120rpx;
  width: 100%;
  padding: 20rpx;
  .address_top_box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10rpx;
  }
}
.address_title {
  font-size: 36rpx;
  color: #eb4450;
  border-top: 3rpx solid #eb4450;
  border-bottom: 3rpx solid #eb4450;
  padding: 20rpx;
}
.goods_box{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  .goods_box_check {
    flex: 1;
  }
  .goods_box_img {
    flex: 2;
  }
  .goods_box_title {
    flex: 3;
  }
}
</style>
