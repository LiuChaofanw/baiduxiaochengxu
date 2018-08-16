/**
 * @file demo page for apiDemo
 * @author renzhonghua@baidu.com
 */
/* globals Page, swan */

Page({
    data: {
        items: {
            id: 'getTimeTest'
        },
        backAverage: 0,
        goAverage: 0,
        goAll: 0,
        backAll: 0,
        all: 1000,
        time: 0
    },

    oneItemClick() {
        let that = this;
        let all = that.getData('all');
        let time = that.getData('time');

        if (time < all) {
            swan.getTimeTest({
                success(res) {
                    let go = res.parse_time - res.startTime;
                    let back = res.completeTime - res.parse_time;
                    let goAll = that.getData('goAll') + go;
                    let backAll = that.getData('backAll') + back;
                    let a = that.getData('time') + 1;

                    that.setData('goAll', goAll);
                    that.setData('backAll', backAll);
                    that.setData('time', a);
                    that.oneItemClick();
                },
                fail(err) {
                    console.log('fail:::' + JSON.stringify(err));
                }
            });
        } else {
            let goAll = that.getData('goAll');
            let backAll = that.getData('backAll');
            that.setData('goAverage', goAll / all);
            that.setData('backAverage', backAll / all);
        }
    }
});
