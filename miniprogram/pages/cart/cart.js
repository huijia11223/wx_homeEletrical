// pages/cart/cart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // product:'',
        products: [{
                index: 0,
                content: '格力空调01',
                sNumber: 98
            },


        ],
        buy: false,
        allPurchase: false,
        shopProducts:false,


    },

    /**
     * 生命周期函数--监听页面加载
     */
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

    },
    toggleAll: function () {
        this.setData({
            shopProducts:!this.data.shopProducts,
            buy:!this.data.buy,
            allPurchase:!this.data.allPurchase
        })
    },
    chooseProduct: function (e) {
        var index = e.target.dataset.index
        this.setData({
            buy: !this.data.buy
        })
    },
    chooseShopProducts:function(e){
        this.setData({
            shopProducts:!this.data.shopProducts,
            buy:!this.data.buy
        })
    },
    add:function(e){
        console.log(e)
    }
})