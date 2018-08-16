/**
 * @file demo page for apiDemo
 * @author renzhonghua@baidu.com
 */
/* globals Page, swan */

Page({
    data: {},

    startVibrate(e) {
        swan.vibrateShort({
            success(res) {
                console.log('vibrateShort--success--', res);
            },
            fail(err) {
                console.log('vibrateShort--fail--', err);
            },
            complete() {
                console.log('vibrateShort--complete--');
            }
        });
    }
});
