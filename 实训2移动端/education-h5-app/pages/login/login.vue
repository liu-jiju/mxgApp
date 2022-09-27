<template>
  <view class="login">
    <view class="x">
      <uni-icons type="closeempty" size="25"></uni-icons>
    </view>
    <view class="huan">
      欢迎回来!
    </view>
    <view class="bottom">
      <view class="mobile">
        <view class="">
          手机号码
        </view>
        <input type="text" placeholder="请输入手机号码">
      </view>
      <view class="mobile" style="margin-top: 20px;">
        <view class="">
          验证码
        </view>
        <input type="text" placeholder="请输入验证码">
        <view class="huoqu">
          获取验证码
        </view>
      </view>
      <button class="btn">登录</button>
    </view>
  </view>
  
</template>

<script>
</script>

<style lang="scss">
  .login{
    width: 90%;
    height: 420px;
    // background-color: pink;
    margin:20px auto;
    .huan{
      font-size: 23px;
      color: #555;
    }
    .x{
      height: 100px;
    }
    .bottom{
      width: 100%;
      height: 250px;
      // background-color: yellow;
      margin-top: 50px;
      .mobile{
        background-color: #f8f6fc;
        width: 100%;
        height: 70px;
        padding: 15px;
        box-sizing: border-box;
        position: relative;
        border-radius: 5px;
        .huoqu{
          position: absolute;
          bottom: 0;
          right: 0;
          padding: 10px;
          box-sizing: border-box;
          background-color: #345dc2;
          color: white;
          width: 80px;
          border-radius: 5px;
          font-size: 12px
        }
      }
      .btn{
        width: 100%;
        height: 50px;
        color: white;
        line-height: 50px;
        text-align: center;
        background-color: #345dc2;
        margin-top: 40px;
      }
    }
  }
</style>