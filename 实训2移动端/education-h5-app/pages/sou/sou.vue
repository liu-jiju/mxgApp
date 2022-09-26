<template>
  <view class="top">
    <view class="fallback">
      <uni-icons type="back" size="30"></uni-icons>
    </view>
    <img src="../../static/images/sousuo.png" alt="">
    <input type="text" class="search-input" placeholder="搜索你想要的内容">
    <view class="qu" style="margin-right: 10px;">
      取消
    </view>
  </view>
  <view class="remen">
    <view style="margin-bottom: 5px;">热门搜索</view>
    <view class='tab'>java</view>
    <view class='tab'>Python</view>
    <view class='tab'>Vue.js</view>
    <view class='tab'>React</view>
    <view class='tab'>SpringBoot</view>
    <view class='tab'>SpringCloud</view>
  </view>
  <view class="remen" style="margin-top: 20px;">
    <view class="aaa">
      <view style="margin-bottom: 5px;">历史搜索</view>
      <view class="kong">清空</view>
    </view>
    
  </view>
</template>

<script>
</script>

<style lang="scss">
  .top{
    width: 100%;
    height: 50px;
    // background-color: pink;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f0f1f2;
    img{
      width: 26px;
      height: 26px;
      position: absolute;
      top: 12px;
      left: 60px;
    }
    .search-input{
      flex: 1;
      background-color: #f0f1f2;
      height: 40px;
      border-radius: 60px;
      margin: 0px 10px;
      padding-left: 50px;
    }
  }
  .remen{
    width: 100%;
    height: 100px;
    background-color: pink;
    padding: 10px;
    box-sizing: border-box;
    .aaa{
      display: flex;
      justify-content: space-between;
    }
  }
  .tab{
    font-size: 12px;
    color: #999;
    border: 0.5px solid #999;
    border-radius: 4px;
    padding: 3px 7px;
    margin: 5px;
    display: inline-block;
  }
</style>