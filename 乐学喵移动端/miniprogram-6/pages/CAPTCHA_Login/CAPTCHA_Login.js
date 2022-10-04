// pages/passwordLogin/passwordLogin.js
Page({
    data: {
        form: {
            mobile: '',
            sms_type: 'login',
            user_pass: '000000',
            sms_code: '',
            captcha: '',
            key: '',
            device_id: '1',
            device_type: '2'
        },
        time: 60,
        num: 60,
        sent: true
    },
    bindKeyInput: function (e) {
        this.setData({
            'form.mobile': e.detail.value
        })
    },
    CodeKeyInput: function (e) {
        console.log(e);
        this.setData({
            'form.sms_code': e.detail.value
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
                    wx.switchTab({
                        url: '/pages/index/index',
                    })
                    wx.setStorageSync('user_info', res.data.data)
                }
            }
        })
    },
    //返回上一级
    back() {
        wx.navigateBack()
    },
    // 切换验证码
    handoff() {
        this.load()
    },
    //点击获取验证码
    fetch() {
        if (this.data.form.mobile == "") {
            wx.showToast({
                title: '手机号格式不正确',
                icon: 'none',
                duration: 2000
            })
        } else {
            wx.request({
                url: 'https://www.lexuemiao.com/api/app/getsmscode',
                method: "POST",
                data: this.data.form,
                success: (res => {
                    console.log(res);
                    if (res.data.code == 200) {
                        wx.showToast({
                            title: '获取成功',
                            icon: 'none',
                            duration: 2000
                        })
                        this.setData({
                            sent: false
                        })
                    }
                })
            })
            if (this.data.time !== 0) {
                var count = setInterval(() => {
                    var newtime = this.data.time--
                    this.setData({
                        num: newtime
                    })
                    if (this.data.time === 0) {
                        this.setData({
                            time: 10,
                            num: 10,
                            sent: true
                        })
                        clearTimeout(count)
                    }
                }, 1000)
            }
        }

    },
    load() {
        wx.request({
            url: 'https://www.lexuemiao.com/api/app/getImgCode',
            method: 'GET',
            success: (res) => {
                console.log(res);
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
    onReady() {},

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