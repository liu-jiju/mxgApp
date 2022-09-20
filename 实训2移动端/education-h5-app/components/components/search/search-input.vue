<template>
  <view class="search-box">
    <input type="text" class="search-input" placeholder="搜索你想要的内容">
  </view>
</template>

<script>
</script>

<style lang="scss">
  .search-box{
    position: fixed;
    left: 0;
    top: 10rpx;
    z-index: 9999;
    width: 100%;
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