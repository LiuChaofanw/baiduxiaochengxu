/**
 * @file demo page for apiDemo
 * @author renzhonghua@baidu.com
 */
/* globals Page, swan */

Page({
    data: {
        title: 'navigationBarLoading'
    },

    showNavigationBarLoading(e) {
        swan.showNavigationBarLoading();
    },

    hideNavigationBarLoading(e) {
        swan.hideNavigationBarLoading();
    }
});
