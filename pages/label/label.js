/**
 * @file label的示例
 * @author houyu(houyu01@baidu.com)
 */

/* globals Page */
Page({
    clickbtn: function (e) {
        console.log(e);
        swan.showToast({
            title: '按钮被点击了'
        });
    }
});
