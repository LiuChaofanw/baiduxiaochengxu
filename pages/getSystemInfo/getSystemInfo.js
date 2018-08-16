/**
 * @file demo page for apiDemo
 * @author renzhonghua@baidu.com
 */
/* globals Page, swan */

 // {
 //     "version": "10.3.6",
 //     "system": "11.2",
 //     "brand": "iPhone",
 //     "windowHeight": 672,
 //     "pixelRatio": "3",
 //     "platform": "ios",
 //     "screenHeight": 736,
 //     "language": "zh_CN",
 //     "windowWidth": 414,
 //     "model": "iPhone 4",
 //     "screenWidth": 414,
 //     "fontSizeSetting": "font-size-1"
 // }
Page({
    data: {
        title: 'getSystemInfo',
        infoList: [{
            label: '手机品牌',
            key: 'brand',
            value: ''
        }, {
            label: '手机型号',
            key: 'model',
            value: ''
        }, {
            label: '当前版本',
            key: 'version',
            value: ''
        }, {
            label: '屏幕宽度',
            key: 'screenWidth',
            value: ''
        }, {
            label: '屏幕高度',
            key: 'screenHeight',
            value: ''
        }, {
            label: 'DPI',
            key: 'pixelRatio',
            value: ''
        }, {
            label: '语言',
            key: 'language',
            value: ''
        }],
        items: [{
            name: '获取手机信息',
            id: 'getSystemInfo'
        // }, {
        //     name: '同步获取手机信息',
        //     id: 'getSystemInfoSync'
        }]
    },



    getSystemInfo(e) {
        swan.getSystemInfo({
            success: res => {
                // 更新数据
                this.updateInfoList(res);
            },
            fail: err => {
                this.showToast({
                    title: '获取失败'
                });
            }
        });
    },

    clearClick() {
        this.updateInfoList({});
    },

    updateInfoList(res) {
        let infoList = this.getData('infoList');
        for (let i = 0; i < infoList.length; ++i) {
            infoList[i].value = res[infoList[i].key];
        }
        this.setData('infoList', infoList);
    }
});
