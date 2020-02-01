// pages/infomation/infomation.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
                messege_type:[
                        {
                                text: "消息",
                                choose: false
                        },
                        {
                                text: "分组",
                                choose: true
                        }
                ],
                info_group:[
                        {
                                text: "回复",
                                url: "../../images/reply.png",
                                choose: true
                        },
                        {
                                text: "赞",
                                url: "../../images/praise.png",
                                choose: false
                        },
                        {
                                text: "@我的",
                                url: "../../images/me.png",
                                choose: false
                        },
                        {
                                text: "通知",
                                url: "../../images/sys_info.png",
                                choose: false
                        }
                ],
                information_list:[

                ]
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {
                var a_info = 
                {
                        image_url: "",
                        nickname: "小c",
                        date: "20-01-18",
                        info: "欢迎加入copeers大家庭，我还是你爸爸",
                        show_info: "",
                        num: 14
                };
                a_info.show_info = a_info.info.substring(0,10);
                var test = [];
                for(var i = 0; i < 10; ++ i){
                        test.push(a_info);
                }
                this.setData({
                        information_list: test
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
                if(index == 0) {    // 选中“消息”
                        temp_list[0].choose = true;
                        temp_list[1].choose = false;
                }
                else {    // 选中“分组”
                        temp_list[0].choose = false;
                        temp_list[1].choose = true;
                }
                this.setData({
                        messege_type: temp_list
                })
        },

        /* 点击中部消息分组 */
        tap_above_center: function (wxml) {
                // console.log(wxml.currentTarget.dataset.index2);
                var index = wxml.currentTarget.dataset.index2;
                var temp_list = this.data.info_group;
                temp_list[index].choose = !temp_list[index].choose;
                this.setData({
                        info_group: temp_list
                })
        }
})