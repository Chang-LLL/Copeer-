// pages/around/around.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
                messege_type: [
                        {
                                text: "关注",
                                choose: false
                        },
                        {
                                text: "推荐",
                                choose: true
                        },
                        {
                                text: "关注",
                                choose: false
                        },
                        {
                                text: "关注",
                                choose: false
                        }
                ],

                img_list: [
                        "../../images/me.png",
                        "../../images/praise.png",
                        "../../images/reply.png",
                        "../../images/sys_info.png",
                        "../../images/praise.png",
                        "../../images/reply.png",
                        "../../images/me.png",
                ],

                center_icon_list: [
                        {
                                url: "../../images/life.png",
                                text: "生活"
                        },
                        {
                                url: "../../images/game.png",
                                text: "娱乐"
                        },
                        {
                                url: "../../images/study.png",
                                text: "学习"
                        },
                        {
                                url: "../../images/practice.png",
                                text: "实习"
                        }
                ],

                shop_card_list: [

                ]
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {
                var tem_list = []
                for(var i = 0; i < 9; ++ i){
                        var card = {
                                url: "",
                                title: "入学西装团购折扣",
                                text: "高校联合排名第一#八所院校联合#五十个院系#",
                                cost: 1000,
                                addition: 500
                        };
                        tem_list.push(card);
                }
                this.setData({
                        shop_card_list: tem_list
                })
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

        /* 点击左上角消息或分组 */
        tap_message_type: function (wxml) {
                // console.log(wxml.currentTarget.dataset.index);
                var index = wxml.currentTarget.dataset.index;
                var temp_list = this.data.messege_type;
                for(var i = 0; i < temp_list.length; ++ i){
                        temp_list[i].choose = false;
                }
                temp_list[index].choose = true;
                this.setData({
                        messege_type: temp_list
                })
        },
})