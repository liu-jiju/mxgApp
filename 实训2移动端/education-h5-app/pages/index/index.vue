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
    <!-- 列表 -->
    <scroll-view scroll-x="true">
      <view class="new">
        <view class="new-item" v-for="item in newList" :key="item.id">
          <view class="img-box">
            <view class="time">
              {{item.totalTime}}
            </view>
            <img :src="item.mainImage" alt="">
          </view>
          <view class="title">
            {{item.title}}
          </view>
          <view class="name">
            {{item.nickName}}
          </view>
          <view class="content">
            <span class="jiage">{{item.priceDiscount}}</span>
            <span class="zaixue">{{item.studyTotal}}人在学</span>
          </view>
        </view>
      </view>
    </scroll-view>
    <!-- 免费精选 -->
    <view class="recommend">
      <view class="left">
        免费精选
        <view class="hot">
          FREE
        </view>
      </view>
      <view class="right">
        全部 >
      </view>
    </view>
    <!-- 列表 -->
    <scroll-view :scroll-x="true" class="scroll">
      <view class="recommend-list">
        <list-li :recommend="freeList"></list-li>
      </view>
    </scroll-view>
    <!-- 付费精品 -->
    <view class="recommend">
      <view class="left">
        付费精品
        <view class="hot">
          NICE
        </view>
      </view>
      <view class="right">
        全部 >
      </view>
    </view>
    <!-- 列表 -->
    <view class="recommend-list-nice">
      <list-li :recommend="niceList"></list-li>
    </view>
    
	</view>
</template>

<script>
  import listLi from '@/components/components/li/li.vue'
  import searchInput from '@/components/components/search/search-input.vue'
  import lunbotu from '@/components/components/swiper/swiper.vue'
  import {getTitle,getRecommend,getNew,getFree,getNice} from '../../api/index.js'
  import {ref,reactive,toRefs} from 'vue'
	export default {
    components: {
      searchInput,
      lunbotu,
      listLi
    },
    onReachBottom() {
      console.log(111);
      if(this.niceList.length==50)return false
      let page1=this.page++
      //请求的付费精品
      getNice(page1).then(res => {
        console.log(res)
        this.niceList = [...this.niceList,...res.data.records]
      })
    },
    setup() {
      const data = reactive({
        page:1,
        navDate:[],//存储nav
        recommend:[],//热门推荐
        newList:[],//近期上新
        freeList:[],//免费精选
        niceList:[],//付费精品
      })
      //请求的nav
      getTitle().then(res => {
        // console.log(res)
        data.navDate = res.data.slice(0,7)
      })
      //请求的热门推荐
      getRecommend().then(res => {
        // console.log(res)
        data.recommend = res.data.records
      })
      //请求的近期上新
      getNew().then(res => {
        // console.log(res)
        data.newList = res.data.records
      }) 
      //请求的免费精选
      getFree().then(res => {
        // console.log(res)
        data.freeList = res.data.records
      })
      //请求的付费精品
      getNice().then(res => {
        console.log(res)
        data.niceList = res.data.records
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
  .new{
    width: 1742px;
    height: 200px;
    // background-color: pink;
    margin: 10px 30px;
    .new-item{
      width: 162px;
      height: 200px;
      // background-color: yellow;
      box-sizing: border-box;
      padding: 10rpx;
      float: left;
      margin-right: 10px;
      box-shadow: 1px 1px 3px rgb(0 0 0 / 10%);
      border-radius: 10px;
      .img-box{
        width: 100%;
        height: 80px;
        background-color: blue;
        border-radius: 10px;
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
      .title{
        font-weight: 900;
        font-size: 14px;
      }
      .name{
        font-size: 13px;
        color: #999;
        margin-top: 20px;
      }
      .content{
        display: flex;
        justify-content: space-between;
        .jiage{
          color: #fb6932;
        }
        .zaixue{
          color: #222;
          font-size: 13px
        }
      }
    }
  }
  .recommend-list-nice{
    width: 95%;
    height: auto;
    // background-color: pink;
    // margin: auto;
  }
</style>
