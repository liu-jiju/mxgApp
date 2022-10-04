// pages/miaowu/miaowu.js
import {
    getRequest,
    postRequest
} from '../../utils/util.js'
Page({

    data: {
        active: 0,
        tabBar: [],
        indexMore: [],
        infolist:[],
        booklist:[]
    },

    onLoad(options) {
        getRequest('app/news/classify').then(res => {
            this.setData({
                tabBar: res.data[0].name
            })
            console.log(this.data.tabBar);
        })
        getRequest('app/square/themeList').then(res => {
            this.setData({
                indexMore: res.data
            })
        })
        getRequest('app/square/squareList').then(res => {
            this.setData({
                infolist:res.data
            })
        })
        getRequest('app/news/list/52').then(res=>{
            console.log(res,'book');
            this.setData({
                booklist:res.data
            })
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})