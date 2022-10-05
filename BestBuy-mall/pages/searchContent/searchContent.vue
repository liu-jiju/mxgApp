<template>
  <view class="searchbg">
    <view class="searchtop">
      <u-input border style="background-color: #fff;flex: 3;" placeholder="请输入你要搜索的内容" v-model="queryValue" @input="resultList"></u-input>
      <u-button v-show="queryValue" style="flex: 1;" class="closeBtn" @click="clearList">取消</u-button>
    </view>
    
      <view class="goods_parent">
        <!-- v-show="listNull" -->
        <view  v-for="item in searchList" :key="item.goods_id">
          <view class="list-cell" @click="goDetail">
            {{item.goods_name}}
          </view>
        </view>
       <!-- <view v-show="listNull" class="">
          暂无数据
        </view> -->
      </view>
  </view>
</template>

<script lang="ts">
  import { getSearchInput } from '@/api/api';
  import {ref,computed} from 'vue';
  import { Code,GoodsList } from '../../api/define';
  export default {
    setup() {
      const searchList = ref<GoodsList>([]);
      const queryValue = ref<string>('');
      const scrollTop = ref(0); 
      const listNull = computed(()=>{
        
        return !(searchList.value.length <=0 && !queryValue.value);
      })
      //查询列表数据
      const resultList = () => {
        getSearchInput(queryValue.value).then(res=>{ 
          if(res.meta.status === Code.SUCCESS){
            searchList.value = res.message;
            
          }
        })
      }
      
      //清空列表数据
      const clearList = () =>{
        searchList.value=[]
        queryValue.value=''
      }
      
      //跳转详情页面
      const goDetail = (values: {goods_id: number;goods_name:string}) =>{
        uni.navigateTo({
          url:`/pages/goodsDetails/goodsDetails?id=${values.goods_id}`
        })
      }
      return {
        scrollTop,queryValue,searchList,resultList,listNull,clearList,goDetail
      }
    }
  }
</script>

<style lang="scss">
.searchbg{
  padding: 20rpx;
  height: 100vh;
  .searchtop{
    display: flex;
    .closeBtn{
      margin-right: 4rpx;
    }
  }
  .goods_parent{
    margin-top: 80rpx;
    .list-cell{
      line-height: 80rpx;
      border-bottom: 2rpx solid #aaa;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  
}
</style>
