/**
 * @file demo page for apiDemo
 * @author renzhonghua@baidu.com
 */
/* globals Page, swan */

Page({
    data: {
        title: 'openShare'
    },

    onShareAppMessage() {
        return {
            title: '小程序标题',
            content: '世界很复杂，百度更懂你',
            iconUrl: 'http://imgsrc.baidu.com/forum/pic/item/d9f9d72a6059252daecdfc36309b033b5bb5b92e.jpg',
            appid: 'appid',
            pannel: ['sinaweibo', 'weixin_friend', 'baiduhi'],
            type: 'url',
            path: '/pages/openShare/openShare',
            success(res) {
                // 分享成功
            },
            fail(err) {
                // 分享失败
            }
        };
    }
});