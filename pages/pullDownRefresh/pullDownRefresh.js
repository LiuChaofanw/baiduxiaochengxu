/**
 * @file demo page for apiDemo
 * @author renzhonghua@baidu.com
 */
/* globals Page, swan */

Page({
    data: {
        title: 'on/stopPullDownRefresh'
    },

    stopPullDownRefresh() {
        swan.stopPullDownRefresh();
    }
});
