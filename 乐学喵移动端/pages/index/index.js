// index.js
Page({
  data: {
    tupian: '',
  },
  yzm(){
    console.log(111);
    wx.request({
      url: 'https://www.lexuemiao.com/api/app/getImgCode',
      method: 'GET',
      success: (res)=>{
        console.log(res);
        var tu = res.data.data.url.img
        this.setData({
          tupian: tu
        })
      }
    })
  },
  onLoad(){
    this.yzm()
  }
})
