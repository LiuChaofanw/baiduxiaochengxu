/**
 * @file demo page for apiDemo
 * @author renzhonghua@baidu.com
 */
/* globals Page, swan */

Page({
    data: {
        title: 'navigateTo/Back,redirectTo'
    },

    navigateTo(e) {
        swan.navigateTo({
            url: '/pages/detail/detail'
        });
    },

    navigateBack(e) {
        swan.navigateBack({
            data: {
                to: 'baidu'
            }
        });
    },

    redirectTo(e) {
        swan.redirectTo({
            url: '/pages/detail/detail'
        });
    }
});