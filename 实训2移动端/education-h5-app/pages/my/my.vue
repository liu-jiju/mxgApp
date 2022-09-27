<template>
	<view class="body">
		<view class="bottombox">
		</view>
		<view class="topbox" @click="goLogin">
			<view class="leftbox">
				<image src="../../static/images/meng.jpg" mode=""></image>
				<p class="textLogin"> 请登录</p>
			</view>
		    <view class=" jt rightbox"></view>
		</view>
		<view class="box2">
			<view class="boxx1">
				<p class="textdd">我的订单</p>
				<view class="jt jta"></view>
			</view>
			<view class="boxx2">
				<p class="textdd">我的余额</p>
				<view class="jt jta"></view>
			</view>
			<view class="boxx2">
				<p class="textdd">我的学习</p>
				<view class="jt jta"></view>
			</view>
		</view>
		<view class="box3">
			<view class="boxx1">
				<p class="textdd">设置</p>
				<view class="jt jta"></view>
			</view>
			<view class="boxx2">
				<p class="textdd">意见反馈</p>
				<view class="jt jta"></view>
			</view>
		</view>
		<view class="box4">
			<view class="boxx4">
				<p class="textdd">关于我们</p>
				<view class="jt jta"></view>
			</view>
		</view>
	</view>
</template>

<script>
  export default {
    setup() {
      const goLogin=()=>{
        uni.navigateTo({
          url:'/pages/login/login'
        })
      }
      return {
        goLogin,
      }
    }
  }
</script>

<style>
	.box4{
		height: 123px;
	}
	.box2,.box3,.box4{
		margin-top: 20px;
		background-color: #fff;
	}
	.boxx4{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #ccc;
	}
	.boxx2{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		border-top: 1px solid #ccc;
	}
	.jta{
		margin-top: 20px;
		margin-right: 30px;
	}
	.textdd{
		line-height: 50px;
		margin-left: 20px;
	}
	.boxx1{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
	}
	.jt{
		width: 12px;
		height: 12px;
		border-right: 2px solid #ccc;
		border-top: 2px solid #ccc;
		transform: rotate(45deg);
	}
	.rightbox{
		margin-top: 58px;
		margin-right: 30px;
	}
	.leftbox{
		width: 250px;
		display: flex;
	}
	body{
		background-color: #f5f5f5;
		width: 100%;
		height: 100%;
	}
	.textLogin{
		font-size: 25px;
		margin-top: 48px;
		margin-left: 20px;
		font-weight: 600;
	}
	image{
		width: 90px;
		height: 90px;
		margin-top: 20px;
		margin-left: 20px;
	}
	.bottombox{
		width: 100%;
		height: 100px;
		background: #3f5bbc;
		
	}
	.topbox{
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
		width: 100%;
		height: 130px;
		background-color: #fff;
		border-radius: 25px 25px 0 0 ;
		margin-top: -50px;
		margin-bottom: 10px;
	}
</style>