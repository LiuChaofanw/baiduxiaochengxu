/**
 * @file demo page for movable-view
 * @author lvlei03@baidu.com
 */
/* globals Page, swan */
/* eslint-disable new-cap */

Page({
    data: {
        x: 50,
        y: 50,
        scaleValue: 1.5
    },
    onLauch() {
        console.log('onLauch');
    },
    onShow() {
        console.log('show');
    },
    onClick() {
        this.setData({
            x: 30,
            y: 30
        });
    },
    bindChange(e) {
        console.log('bindChange: ');
        console.log(e.detail);
    },
    bindscale(e) {
        console.log('bindScale: ');
        console.log(e.detail);
    },
    clickScale() {
        this.setData('scaleValue', 3);
    }
});