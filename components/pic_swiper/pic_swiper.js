// components/pic_swiper/pic_swiper.js
Component({
        /**
         * 组件的属性列表
         */
        properties: {
                swiper_number: {
                        type: Number,
                        value: 0
                },
                img_url: {
                        type: Array,
                        value: []
                }
        },

        /**
         * 组件的初始数据
         */
        data: {
                swiperList: [],
                currentCenterIndex: 0,
                touchDotX: 0,    //X按下时坐标
                touchDotY: 0,    //y按下时坐标
                interval: null,    //计时器
                time: 0,    //从按下到松开共多少时间*100
        },

        /**
         * 声明周期
         */
        // 根据传入的图片链接列表自动构造滚动图片
        attached: function () {
                console.log("引用:" + this.properties.swiper_number);
                var len = this.properties.swiper_number;
                this.data.currentCenterIndex = this.properties.swiper_number >> 1;
                var tem_list = [];
                for(var i = 0; i < this.properties.swiper_number; ++ i){
                        
                        tem_list.push({
                                swpClass: "",
                                imgsrc: this.properties.img_url[i]
                        });
                }
                tem_list[this.data.currentCenterIndex].swpClass ="swp-center";
                if(this.data.currentCenterIndex > 0){
                        tem_list[this.data.currentCenterIndex - 1].swpClass = "swp-left";
                        for(var i = 0; i < this.data.currentCenterIndex - 1; ++ i){
                                tem_list[i].swpClass = "swp-leftNo";
                        }    
                }
                if (this.data.currentCenterIndex < len - 1) {
                        tem_list[this.data.currentCenterIndex + 1].swpClass = "swp-right";
                        for (var i = this.data.currentCenterIndex + 2; i < len; ++i) {
                                tem_list[i].swpClass = "swp-rightNo";
                        }
                }
                console.log(tem_list);
                this.setData({
                        swiperList: tem_list
                });
        },

        /**
         * 组件的方法列表
         */
        methods: {
                swpBtn: function (e) {
                        var idx = e.currentTarget.dataset.index;
                        this.swipePicture(idx);
                },

                // 触摸开始事件
                touchStart: function (e) {
                        this.setData({
                                touchDotX: e.touches[0].pageX, // 获取触摸时的原点
                                touchDotY: e.touches[0].pageY
                        });
                        // 使用js计时器记录时间 
                        var that = this;
                        this.data.interval = setInterval(function () {
                                that.data.time++;
                        }, 100);
                },
                // 触摸结束事件
                touchEnd: function (e) {
                        let touchMoveX = e.changedTouches[0].pageX;
                        let touchMoveY = e.changedTouches[0].pageY;
                        let tmX = touchMoveX - this.data.touchDotX;
                        let tmY = touchMoveY - this.data.touchDotY;
                        if (this.data.time < 20 && this.data.time > 0.01) {
                                let absX = Math.abs(tmX);
                                let absY = Math.abs(tmY);
                                if (absX > 1.5 * absY && absX > 0.1) {
                                        if (tmX < 0) {
                                                console.log("左滑=====");
                                                if (this.data.currentCenterIndex < this.data.swiperList.length - 1) {
                                                        this.swipePicture(this.data.currentCenterIndex + 1);
                                                }
                                        } else {
                                                console.log("右滑=====");
                                                if (this.data.currentCenterIndex > 0) {
                                                        this.swipePicture(this.data.currentCenterIndex - 1);
                                                }
                                        }
                                }
                        }
                        clearInterval(this.data.interval); // 清除setInterval
                        this.data.time = 0;
                },

                /* 滚动图片 */
                swipePicture: function (idx) {
                        var swp = this.data.swiperList;
                        var max = swp.length;
                        var prev = swp[idx - 1];//前一个
                        var next = swp[idx + 1];//后一个
                        var curView = swp[idx];//当前
                        if (curView.swpClass === 'swp-center') {//如果当前是在中间的，即可跳转
                                wx.navigateTo({
                                        url: curView.aurl,
                                })
                        }

                        if (prev) {//如果当前的前面有
                                if (next) {//当前的后面有
                                        next.swpClass = "swp-right";
                                }
                                prev.swpClass = "swp-left";
                                curView.swpClass = "swp-center";
                                for (var i = 0; i < idx; i++) { //当前前一个的前面所有
                                        swp[i].swpClass = 'swp-leftNo'
                                }
                        }
                        if (next) {//如果当前的后面有
                                if (prev) {//当前的前面有
                                        prev.swpClass = "swp-left";
                                }
                                curView.swpClass = "swp-center";
                                next.swpClass = "swp-right";
                                for (var i = (idx + 2); i < max; i++) {//当前后一个的后面所有
                                        swp[i].swpClass = 'swp-rightNo'
                                }
                        } else {
                                prev.swpClass = "swp-left";
                                curView.swpClass = "swp-center";
                        }

                        this.setData({
                                swiperList: swp,
                                currentCenterIndex: idx
                        })
                }
        }
})
