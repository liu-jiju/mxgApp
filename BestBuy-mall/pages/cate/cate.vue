<template>
  <view>
    <!-- 搜索 -->
    <searchInput />
    <!-- 内容区 -->
    <u-row gutter="16" justify="space-between"> 
      <u-col span="3">
        <view>
          <scroll-view scroll-y="true" class="scroll-Y">
            <view @click="handleSearch(item)" id="demo1" class="scroll-view-item" :class="{actived: item.cat_id === goodsId}" v-for="item in list" :key="item.cat_id">{{item.cat_name}}</view>
          </scroll-view>
        </view>
      </u-col>
      <u-col span="9">
        <scroll-view scroll-y="true" class="scroll-Y">
            <view v-for="child in childrenList" :key="child.cat_id">
              <title>/{{child.cat_name}}/</title>
              <u-grid :col="3" :border="false">
                <u-grid-item v-for="childs in child.children" :key="childs.cat_id">
                  <img :src="childs.cat_icon" alt="" class='childItem'>
                  <view class="grid-text">{{childs.cat_name}}</view>
                </u-grid-item>
              </u-grid>
            </view>
        </scroll-view>
      </u-col>
    </u-row>

  </view>
</template>

<script lang="ts">
import SearchInput from '@/components/searchInput/searchinput.vue';
import {Code} from '@/api/define';
import { getCateList } from '@/api/api';
import {reactive,toRefs} from 'vue'
export default {
  components: {
    SearchInput
  },
  setup() {
    const data = reactive({
      list: [],
      goodsId: 1,
      childrenList: []
    })
    getCateList().then(res => {
      console.log(res,'我是获取');
      if(res && res.meta.status === Code.SUCCESS){
        data.list = res.message;
        data.childrenList = res.message[0].children;
      }
    })
    const handleSearch = item =>{
      data.goodsId = item.cat_id;
      data.childrenList = item.children;
    }
    return {
      ...toRefs(data),handleSearch
    }
  }
}
</script>

<style lang="scss" scoped>
  .scroll-view-item{
    text-align: center;
  }
  .scroll-Y {
    height: calc(100vh - 100rpx);
    // background-color: #ccc;
    line-height: 80rpx;
    font-weight: 500;
    text-align: center;
    .childItem{
      width: 90rpx;
      height: 90rpx;
    }
  }
  .actived{
    border-left: 6rpx solid #EB4450;
    color: #EB4450;
  }
</style>
