/**
 * @file demo page for apiDemo
 * @author renzhonghua@baidu.com
 */
/* globals Page, swan */

Page({
    data: {
        title: 'request'
    },

    request() {
        swan.request({
            url: 'http://sfc.baidu.com/shopping/nianhuo/bimai',
            data: {
                cityid: '201'
            },
            success: res => {
                swan.showToast({
                    title: '请求成功'
                });
            },
            fail: err => {
                swan.showToast({
                    title: '请求失败'
                });
            }
        });
    }
});