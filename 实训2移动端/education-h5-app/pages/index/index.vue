<template>
	<view class="content">
    <view class="box">
      <!-- 搜索框组件 -->
      <search-input></search-input>
      <!-- 轮播图 -->
      <lunbotu></lunbotu>
    </view>
    <!-- 分类 -->
    <view class="classify">
      <li v-for="item in navDate" :key="item.id">{{item.name}}</li>
      <li>全部分类</li>
    </view>
    <!-- 热门推荐 -->
    <view class="recommend">
      <view class="left">
        热门推荐
        <view class="hot">
          HOT
        </view>
      </view>
      <view class="right">
        全部 >
      </view>
    </view>
    <!-- 列表 -->
    <scroll-view :scroll-x="true" class="scroll">
      <view class="recommend-list">
        <list-li :recommend="recommend"></list-li>
      </view>
    </scroll-view>
    
    <!-- 近期上新 -->
    <view class="recommend">
      <view class="left">
        近期上新
        <view class="hot">
          NEW
        </view>
      </view>
      <view class="right">
        全部 >
      </view>
    </view>
      
	</view>
</template>

<script>
  import listLi from '@/components/components/li/li.vue'
  import searchInput from '@/components/components/search/search-input.vue'
  import lunbotu from '@/components/components/swiper/swiper.vue'
  import {getTitle,getRecommend} from '../../api/index.js'
  import {ref,reactive,toRefs} from 'vue'
	export default {
    components: {
      searchInput,
      lunbotu,
      listLi
    },
    setup() {
      const data = reactive({
        navDate:[],//存储nav
        recommend:[],//热门推荐
      })
      //请求的nav
      getTitle().then(res => {
        // console.log(res)
        data.navDate = res.data.slice(0,7)
      })
      //请求的热门推荐
      getRecommend().then(res => {
        console.log(res)
        data.recommend = res.data.records
      })
      return {
        ...toRefs(data)
      }
    }
	}
</script>

<style lang="scss">
  .content{
    margin-bottom: 53px;
  }
  .box{
    width: 100%;
    // background-color: red;
    overflow: hidden;
  }
  .classify{
    width: 90%;
    height: 160rpx;
    // background-color: pink;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    li{
      list-style: none;
      width: 23%;
      height: 70rpx;
      background-color: #f8f9fb;
      text-align: center;
      line-height: 70rpx;
      border-radius: 15rpx;
      margin-left: 10rpx;
      font-size: 13px;
    }
  }
  .recommend{
    width: 90%;
    height: 30px;
    // background-color: pink;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
      display: flex;
      align-items: center;
      width: 120px;
      font-size: 18px;
      // background-color: skyblue;
      .hot{
        font-size: 20rpx;
        width: 80rpx;
        height: 16px;
        background-color: red;
        text-align: center;
        color: white;
        border-radius: 15px 15px 15px 0;
        margin-left: 10rpx;
      }
    }
    .right{
      font-size: 13px;
      color: #959da5;
    }
  }
  .recommend-list{
    width: 800px;
    height: auto;
    // background-color: pink;
    margin: auto;
  }
</style>
