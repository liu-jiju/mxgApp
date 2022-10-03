<template>
  <view class="btn-top">
    <u-button @click="handleTo">搜索</u-button>
  </view>
</template>

<script lang="ts">
  export default {
    setup() {
      const handleTo = () =>{
        uni.navigateTo({
          url: '/pages/searchContent/searchContent' 
        })
      }
      return {
        handleTo
      }
    }
  }
</script>

<style lang="scss" scoped>
  .btn-top {
    width: 100%;
    height: 100rpx;
    padding: 10rpx;
    background-color: #EB4450;
  
    .button {
      height: 70rpx;
    }
  }
</style>