<template>
  <view class="top">
    <view @click="goback" class="fallback">
      <uni-icons type="back" size="30"></uni-icons>
    </view>
    <img src="../../static/images/sousuo.png" alt="">
    <input type="text" class="search-input" placeholder="搜索你想要的内容">
    <view class="qu" style="margin-right: 10px;">
      取消
    </view>
  </view>
</template>

<script>
  import {ref,reactive,toRefs} from 'vue'
  export default {
    setup() {
      const data=()=>{
        
      }
      const goback=()=>{
        uni.navigateBack({
          url:"/pages/index/index"
        })
      }
      return {
        ...toRefs(data),goback
      }
    }
  }
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
</style>