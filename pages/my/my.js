// pages/my/my.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
                nickname: "用户名称",
                sex: "女",
                level: "v8",
                personal_introduction: "个人简介",
                post: 0,
                attention: 0,
                fans: 0,
                item_list: [
                        {
                                item_name: "地址管理",
                                url:""
                        },
                        {
                                item_name: "我的赞",
                                url: ""
                        },
                        {
                                item_name: "我的物品",
                                url: ""
                        },
                        {
                                item_name: "我的...",
                                url: ""
                        },
                ],
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

        }
})