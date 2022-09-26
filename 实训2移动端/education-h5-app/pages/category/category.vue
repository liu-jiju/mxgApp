<template>
  <view class="top">
    分类
    <img src="../../static/images/sousuo1.png" alt="">
  </view>
  <view class="box">
    <!-- left滚动 -->
    <scroll-view class="scroll" scroll-y="true" >
      <view class="left">
        <view @click="add(item)" class="left-item" v-for="item in fencelist" :key="item.id">
          <view :class="{'active':item.name==name}">
            {{item.name}}
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="right">
      <li v-for="item in  fencelist1" :key="item.id">{{item.name}} </li>
    </view>
  </view>
  
</template>

<script>
  import {getFence} from '@/api/index.js'
  import {ref,reactive,toRefs} from 'vue'
  export default {
    setup() {
      const data = reactive({
        fencelist:[],//侧边栏
        fencelist1:[],//右侧数据
        name:'Java',
      })
      const add=(item)=>{
        data.fencelist1=item.labelList
        data.name = item.name
        console.log(name);
      }
      //请求的nav
      getFence().then(res => {
        console.log(res)
        data.fencelist = res.data
        data.fencelist1 = res.data[0].labelList
      })
      return {
        ...toRefs(data),
        add
      }
    }
  }
</script>

<style lang="scss">
  .box{
    display: flex;
  }
  .scroll{
    width: 100px;
  }
  .top{
    width: 100%;
    height: 44px;
    background-color: rgb(52, 93, 194);
    color: white;
    text-align: center;
    line-height: 44px;
    font-size: 16px;
    font-weight: 700;
    position: relative;
    img{
      width: 20px;
      position: absolute;
      right: 5px;
      top: 10px;
    }
  }
  .left{
    width: 100px;
    height: 666px;
    background-color: #f8f9fb;
    .left-item{
      width: 100%;
      height: 74px;
      text-align: center;
      line-height: 74px;
      color: #888;
      font-size: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .right{
    width: 268px;
    height: 109px;
    // background-color: pink;
    display: flex;
    flex-wrap: wrap;
    padding-top: 17px;
    padding-left: 5px;
    li{
      list-style: none;
      width: 80px;
      height: 30px;
      border: 1px solid #999;
      border-radius: 15px;
      text-align: center;
      line-height: 30px;
      font-size: 12px;
      margin: 7px 2px;
    }
  }
  .active{
    width: 100%;
    height: 20px;
    line-height: 20px;
    // background-color: pink;
    color: #345dc2;
    border-left: 3px solid #345dc2;
    font-weight: 900;
    font-size: 18px;
  }
</style>