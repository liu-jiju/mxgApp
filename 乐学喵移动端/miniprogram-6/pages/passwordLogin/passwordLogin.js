// pages/passwordLogin/passwordLogin.js
Page({
    data: {
        form: {
            mobile: '',
            device_id: '1',
            device_type: '2',
            key: '',
            user_pass: '',
            captcha: '',
            sms_code: ''
        },

    },
    bindKeyInput: function (e) {
        this.setData({
            'form.mobile': e.detail.value
        })
    },
    bindKeyWord: function (e) {
        this.setData({
            'form.user_pass': e.detail.value
        })
    },
    login() {
        wx.request({
            url: 'https://www.lexuemiao.com/api/app/login',
            data: this.data.form,
            method: 'POST',
            success: (res) => {
                console.log(res);
                if (res.data.code == 200) {
                    wx.showToast({
                        title: '登录成功',
                        icon: 'none',
                        duration: 2000
                    })
                    wx.switchTab({
                        url: '/pages/mine/mine',
                    })
                    wx.setStorageSync('user_info', res.data.data)
                }
            }
        })
    },
    nopassword() {
        console.log('8520');
    },
    handoff() {
        this.load()
    },
    load() {
        wx.request({
            url: 'https://www.lexuemiao.com/api/app/getImgCode',
            method: 'GET',
            success: (res) => {
                this.setData({
                    captcha: res.data.data.url.img,
                    'form.key': res.data.data.url.key
                })
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.load()
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