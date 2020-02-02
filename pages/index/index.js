// pages/index/index.js
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
                                url: "../../images/free.png",
                                text: "闲置"
                        },
                        {
                                url: "../../images/activity.png",
                                text: "活动"
                        },
                        {
                                url: "../../images/club.png",
                                text: "社团"
                        },
                        {
                                url: "../../images/work.png",
                                text: "勤工"
                        }
                ],

                news_list: [

                ]
        },

        /**
         * 生命周期函数--监听页面加载
         */
        /**
                 * 生命周期函数--监听页面加载
                 */
        onLoad: function (options) {
                var tem_list = []
                for (var i = 0; i < 10; ++i) {
                        var card = {
                                url: "",
                                title: "篮球社招新",
                                text: "篮球社招新，不论你是大一新生还是大四毕业生，都有机会参与。报名地点：东操一侧北看台，截止日期为疫情结束日期。",
                                show_text: "",
                                relative_number: [100, 999, 10]
                        };
                        card.show_text = card.text.substring(0, 24);
                        tem_list.push(card);
                }
                this.setData({
                        news_list: tem_list
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
                for (var i = 0; i < temp_list.length; ++i) {
                        temp_list[i].choose = false;
                }
                temp_list[index].choose = true;
                this.setData({
                        messege_type: temp_list
                })
        },
})