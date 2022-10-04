Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
                img: '../../utils/img/cart.png',
                title: '我的订单',
                content: '买课发快递'
            },
            {
                img: '../../utils/img/kecheng.png',
                title: '兑换课程',
                content: '兑换码兑换课程'
            },
            {
                img: '../../utils/img/dingwei.png',
                title: '地址管理',
                content: '收货地址'
            }
        ],
        lists: [
            [{
                    img: "../../utils/img/xingxing.png",
                    title: '我的收藏', // 左侧标题
                },
                {
                    img: "../../utils/img/zhuanshi.png",
                    title: '我的会员',
                },
                {
                    img: "../../utils/img/youhui.png",
                    title: '我的优惠卷',
                }
            ],
            [{
                    img: "../../utils/img/lingdang.png",
                    title: '我的消息',
                },
                {
                    img: "../../utils/img/fankui.png",
                    title: '问题反馈',
                }
            ]
        ],
        data: wx.getStorageSync('user_info'),
        
    },



    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})