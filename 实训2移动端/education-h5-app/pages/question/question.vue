<template>
  <view class="box">
    <!-- 搜索框组件 -->
    <view class="box1">
      <search-input></search-input>
    </view>
    <!-- 导航栏 -->
    <view class="Nav">
      <view id="navitem" :class="{'active':navName=='热门回答'}" @click="re('热门回答')">热门回答</view>
      <view id="navitem" :class="{'active':navName=='最新问题'}" @click="zui('最新问题')">最新问题</view>
      <view id="navitem" :class="{'active':navName=='等待回答'}" @click="deng('等待回答')">等待回答</view>
    </view>
    <!-- 列表内容 -->
    <view class="list">
      <view class="item" v-for="item in wendaList" :key="item.id">
        <view class="top">
          {{item.title}}
        </view>
        <view class="bottom">
          <view class="left">
            <span>{{item.reply}}回答</span>
            <span> · {{item.viewCount}}浏览</span>
          </view>
          <view class="right">
            <span>{{item.nickName}}</span>
            <span> · {{item.updateDate}}</span>
          </view>
        </view>
      </view>
    </view>
    
  </view>
</template>

<script>
  import {ref,reactive,toRefs} from 'vue'
  import {getWenda} from '@/api/index.js'
  import searchInput from '@/components/components/search/search-input.vue'
  export default {
    components: {
      searchInput
    },
    onReachBottom() {
      if(this.wendaList.length==60)return false
      //请求的付费精品
      let page1 = this.page++
      getWenda(page1).then(res => {
        // console.log(res)
        this.wendaList = [...this.wendaList,...res.data.records]
      })
    },
    setup() {
      const data = reactive({
        wendaList:[],//问答数据
        page: 1,//存储下拉的页数
        navName: '热门回答',//存储高亮的nav
      })
      getWenda().then(res=>{
        console.log(res);
        data.wendaList = res.data.records
      })
      //点击最新问题
      const re =(item)=>{
        console.log(111);
        data.page=1
        data.navName = item
        getWenda().then(res=>{
          data.wendaList = res.data.records
        })
      }
      //点击最新问题
      const zui =(item)=>{
        console.log(111);
        data.page=1
        data.navName = item
        getWenda().then(res=>{
          data.wendaList = res.data.records
        })
      }
      //点击等待回答
      const deng =(item)=>{
        console.log(222);
        data.page=1
        data.navName = item
        getWenda().then(res=>{
          data.wendaList = res.data.records
        })
      }
      return {
        ...toRefs(data),
        re,zui,deng
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
  .Nav{
    position: fixed;
    top: 44px;
    width: 100%;
    height: 40px;
    // background-color: pink;
    display: flex;
    border-bottom: 1px solid #efeff4;
    #navitem{
      flex: 1;
      text-align: center;
      line-height: 40px;
      background-color: white;
    }
    .active{
      color: #007aff;
      border-bottom: 3px solid #007aff;
    }
  }
  .list{
    margin-top: 84px;
  }
  .item{
    width: 100%;
    height: 73px;
    // background-color: pink;
    padding: 15px;
    border-bottom: 0.5px solid #f1f1f1;
    box-sizing: border-box;
    .top{
      font-size: 16px;
      font-weight: 700;
    }
    .bottom{
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      color: #999;
    }
  }
</style>