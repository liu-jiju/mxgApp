<template>
  <view class="box">
    <li v-for="item in recommend" :key="item.id">
      <view class="img-box">
        <view class="time">
          {{item.totalTime}}
        </view>
        <img :src="item.mainImage" alt="">
      </view>
      <view class="content">
        <view class="title">
          {{item.title}}
        </view>
        <view class="name">
          {{item.nickName}}
        </view>
        <view class="yuedu">
          <span class="jiage">{{item.priceDiscount}}</span>
          <span class="zaixue">{{item.studyTotal}}</span>
        </view>
      </view>
    </li>
  </view>
</template>

<script>
  import {getRecommend} from '@/api/index.js'
  import {ref,reactive,toRefs} from 'vue'
  export default {
    props:["recommend"]

  }
</script>

<style lang="scss">
  li{
    list-style: none;
    display: flex;
    width: 330px;
    height: 100px;
    // background-color: skyblue;
    margin: 10rpx 30px;
    float: left;
    .img-box{
      flex: 1;
      // background-color: yellow;
      position: relative;
      .time{
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: rgba(51,51,51,.4);
        border-radius: 10px;
        color: white;
        font-size: 12px;
        width: 60px;
        text-align: center;
      }
      img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
    .content{
      flex: 1;
      margin-left: 10px;
      .title{
        font-weight: 900;
        font-size: 14px;
      }
      .name{
        font-size: 13px;
        color: #999;
        margin-top: 20px;
      }
      .jiage{
        color: #fb6932;
      }
      .zaixue{
        color: #222;
        margin-left: 10px;
      }
    }
  }
</style>