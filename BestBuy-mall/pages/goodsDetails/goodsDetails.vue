<template>
  <view>
    <!-- 轮播图 -->
    <u-swiper mode="aspectFill" :list="list.pics" name="pics_mid_url" height="400"></u-swiper>
    <view style="color: #EB4450;">￥{{list.goods_price}}</view>
    <view style="display: flex;" class="">
      <view class="goodsname">
        {{list.goods_name}}
      </view>
      <view style="width: 50px;" class="">
        <u-icon name="star"></u-icon>
        <view class="">收藏</view>
      </view>
    </view>
    <view class="">
      <title style="color: #EB4450;">图文详情</title>
      <u-parse :html="list.goods_introduce"></u-parse>
    </view>
    <!-- 底部 -->
    <uni-goods-nav class="uniGoodsNav" :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
      @buttonClick="buttonClick" />
  </view>
</template>

<script lang="ts">
  import {
    reactive,
    toRefs
  } from 'vue';
  import {
    getGoodDetail
  } from '@/api/api';
  export default {
    name: 'details',
    setup() {
      const info = reactive({
        list: {
          cat_id: 0,
          pics: 0,
          goods_price: 0,
          goods_name: '',
          goods_introduce: ''
        },
        options: [{
          icon: 'headphones',
          text: '客服'
        }, {
          icon: 'shop',
          text: '店铺',
          info: 2,
          infoBackgroundColor: '#007aff',
          infoColor: "red"
        }, {
          icon: 'cart',
          text: '购物车',
          info: 2
        }],
        buttonGroup: [{
            text: '加入购物车',
            backgroundColor: '#ff0000',
            color: '#fff'
          },
          {
            text: '立即购买',
            backgroundColor: '#ffa200',
            color: '#fff'
          }
        ],
        parseData: []
      });
      
      /**
       * 本地储存，放置数据，添加购物车
       * 考虑：重复添加，我们应该
       * 1.先从本地获取存储的数据
       *   如果有：判断当前数据一摸一样就number++
       *           如果不一样就直接存储
       *           不一样的数据进行数据push
       *   没有的话，直接存储
       * */
       
      const getLocaclHostData = () =>{
        uni.getStorage({
        	key: 'infoList',
        	success: function (res) {
            info.parseData = res.data
        	},
          
        });
      }
      
      //添加信息到本地
      const setLocalhostInfo = () =>{
       let cartList = [{
         info,
         number:1,
         checked: false
       }]
       uni.setStorage({
         data: cartList,
         key: 'infoList'
       });
       uni.showToast({
         title: '保存成功',
         duration: 2000
       })
      }
      
      
      /**
       * 将商品信息添加至本地，并且判断是否重复添加
       * */
      const setAddGoodsCart = () =>{
        getLocaclHostData()
        console.log(info.parseData,'info.parseData');
        if(info.parseData.length === 0){
          setLocalhostInfo()
        }else{
          const result = info.parseData.find(item=> item.list.cat_id === info.list.cat_id );
          if(result){
            result.number ++;
            uni.setStorage({
              data:JSON.stringify(result),
              key: 'infoList'
            });
          }else{
            setLocalhostInfo()
          }
        }
        
      };
      
      const onClick = (e) => {
        console.log("1111");
        uni.switchTab({
          url: '../car/car'
        })
      }
      const buttonClick = (e) => {
        console.log('我是点击的加入购物车')
        setAddGoodsCart()
      }

      return {
        ...toRefs(info),
        onClick,
        buttonClick
      };
    },
    onLoad(opt) {
      console.log(opt);
      getGoodDetail(opt.id).then(res => {
        console.log(res);
        this.list = res.message
        console.log(this.list, '666');
      })
    }
  }
</script>

<style lang="scss">
.uniGoodsNav{
  position: fixed;
  bottom: 0;
  width: 100%;
}
.goodsname{
  
}
</style>
