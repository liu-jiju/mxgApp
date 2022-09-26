<template>
  <view class="search-box" @click="gonavigate()">
    <img src="../../../static/images/sousuo.png" alt="">
    <input type="text" class="search-input" placeholder="搜索你想要的内容">
  </view>
</template>

<script>
  export default {
    setup() {
      const gonavigate=()=>{
        uni.navigateTo({
          url:"/pages/sou/sou"
        })
      }
      return {
        gonavigate
      }
    }
  }
</script>

<style lang="scss">
  .search-box{
    position: fixed;
    left: 0;
    top: 10rpx;
    z-index: 9999;
    width: 100%;
    // background-color: rgb(52, 93, 194);
    img{
      width: 20px;
      position: absolute;
      left: 100px;
      top: 8px;
    }
    .search-input{
      background-color: #f8f8f8;
      height: 70rpx;
      line-height: 40rpx;
      text-align: center;
      border-radius: 30rpx;
      margin: 0 20rpx;
    }
  }
</style>