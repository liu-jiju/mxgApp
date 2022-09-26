<template>
  <view class="box">
    <!-- 搜索框组件 -->
    <view class="box1">
      <search-input></search-input>
    </view>
    <!-- 导航栏 -->
    <scroll-view class="scroll" scroll-x="true">
      <view class="Nav">
        <li @click="add(0)"><view :class="idx===0 ?'height':''">推荐</view></li>
        <li @click='add(index+1)' v-for="item,index in fencelist" :key="index"><view :class="idx ===index+1 ? 'height' : ''">{{item.name}}</view></li>
      </view>
    </scroll-view>
    <!-- 列表数据 -->
    <view class="scroll1">
      <view v-for="item in fencelist1" :key="item.id" class="bottom-list">
        <!-- 上 -->
        <view class="top">
          <view class="left" :style="`width: ${item.imageUrl ? 230 : 340}px;`" >
            <view class="title">
              {{item.title}}
            </view>
            <view class="content">
              {{item.summary}}
            </view>
          </view>
          <view class="right" v-if="item.imageUrl">
            <img :src="item.imageUrl" alt="">
          </view>
        </view>
        <!-- 下 -->
        <view class="bottom">
          <span>{{item.nickName}}</span>
          <span>·{{item.updateDate}}</span>
          <span>·{{item.thumhup}}赞</span>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import {getFence,getRead} from '@/api/index.js'
  import {ref,reactive,toRefs} from 'vue'
  import searchInput from '@/components/components/search/search-input.vue'
  export default {
    components: {
      searchInput
    },
    onReachBottom() {
      if(this.fencelist1.length==50)return false
      //请求的付费精品
      getRead().then(res => {
        // console.log(res)
        this.fencelist1 = [...this.fencelist1,...res.data.records]
      })
    },
    setup() {
      const data = reactive({
        fencelist:[],//头部
        fencelist1:[],//列表数据
        idx:0,
      })
      const add=(idx)=>{
        console.log(idx);
        data.idx = idx;
        getRead().then(res => {
          // console.log(res)
          data.fencelist1 = res.data.records
        })
      }
      //请求的nav
      getFence().then(res => {
        // console.log(res+'111')
        data.fencelist = res.data
      })
      //请求的阅读列表
      getRead().then(res => {
        // console.log(res)
        data.fencelist1 = res.data.records
      })
      return {
        ...toRefs(data),
        add
      }
    }
  }
</script>

<style lang="scss">
  .box1{
    position: fixed;
    top: 0;
    width: 100%;
    height: 44px;
    background-color: #345dc2;
  }
  .scroll{
    .Nav{
      position: fixed;
      top: 44px;
      // margin-top: 44px;
      width: 200%;
      height: 40px;
      background-color: white;
      border-bottom: 1px solid #efeff4;
      li{
        width: 75px;
        height: 40px;
        // background-color: yellow;
        border-bottom: 1px solid #efeff4;
        text-align: center;
        line-height: 40px;
        list-style: none;
        font-size: 15px;
        float: left;
        .height{
          height: 40px;
          display: inline-block;
          // background-color: pink;
          color: #007aff;
          border-bottom: 3px solid #007aff;
        }
      }
    }
  }
  .scroll1{
    width: 100%;
    // height: 1200px;
    // background-color: pink;
    margin-top: 88px;
    .bottom-list{
      width: 100%;
      // background-color: yellow;
      padding: 15px;
      box-sizing: border-box;
      border-bottom: 1px solid #efeff4;
      .top{
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        .left{
          flex: 1;
          // width: 100%;
          .title{
            font-size: 17px;
            font-weight: 700;
          }
          .content{
            font-size: 13px;
            white-space: nowrap; 
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .right{
          width: 110px;
          height: 70px;
          background-color: skyblue;
          img{
            width: 100%;
            height: 100%;
            border: 10px;
          }
        }
      }
    }
  }
</style>