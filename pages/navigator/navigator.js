/**
 * @file test navigator componnent
 * @author lvlei(lvlei03@baidu.com)
 */

/* globals Page */
Page({
    onLoad(options) {},
    navigateTo(e) {
        console.log(e);
        swan.navigateTo({
            url: 'pages/navigatePage/navigatePage'
        });
    },
    redirect(e) {
        console.log(e);
        swan.redirectTo({
            url: 'pages/redirectPage/redirectPage'
        });
    }
})