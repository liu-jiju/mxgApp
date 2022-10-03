<template>
  <view class="wrap" v-for="(item,index) in data.florlist" :key="index">
    <view class="out"><img :src="item.floor_title.image_src" :alt="item.floor_title.name" class="titleImg"/></view>
  		<u-row gutter="16">
  			<u-col span="4" style='padding: 0 !important;'>
  				<img :src="item.product_list[0].image_src" :style="`width: ${item.product_list[0].image_width}rpx`" class="leftImg"/>
  			</u-col>
  			<u-col span="8">
  				<u-grid :col="2" :border="false">
  						<u-grid-item v-for="child in item.product_list" :key="child.image_src" v-show="child.image_width !=='232'">
  							<img :src="child.image_src" :alt="child.name" :style="`width: ${child.image_width}rpx;height:208rpx`"/>
  						</u-grid-item>
  				</u-grid>
  			</u-col>
  		</u-row>
  	</view>
</template>

<script lang="ts" setup>
  import { getFlor } from '@/api/api';
  import {MessageList,Code} from '@/api/define';
  import { reactive } from 'vue';
  let data: {
    florlist: MessageList;
  } = reactive({
    florlist: [],
  });
  //楼层接口
  getFlor().then(res =>{
    if(res && res.meta.status === Code.SUCCESS){
      data.florlist = res.message
    }
    // console.log(data.florlist,'楼层的获取');
  },err =>err);
</script>

<style lang="scss" scoped>
.wrap {
		padding: 0rpx;
    .out{
      position: relative;
      height: 140rpx;
      .titleImg{
        position: absolute;
        top: 30rpx;
        width: 100%; 
        height: 50rpx; 
        padding: 30rpx 0;
        margin-top: 15rpx;
      }
    }
    
    .leftImg{
      padding-top: 30rpx;
      height: 260px;
    }
	}

	.u-row {
		margin: 40rpx 0;
    padding: 0;
    .u-col {
      padding: 0 !important;
    }
	}

	.demo-layout {
		height: 80rpx;
		border-radius: 8rpx;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}
  .grid-text {
  		font-size: 28rpx;
  		margin-top: 4rpx;
  		color: $u-type-info;
  	}
</style>
