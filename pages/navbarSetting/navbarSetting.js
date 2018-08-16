/**
 * @file demo page for apiDemo
 * @author renzhonghua@baidu.com
 */
/* globals Page, swan */

Page({
    data: {
        items: [{
            name: 'setNavigationBarColor',
            id: 'setNavigationBarColor'
        }, {
            name: 'setNavigationBarTitle',
            id: 'setNavigationBarTitle'
        // }, {
        //     name: 'showNavigationBarLoading',
        //     id: 'showNavigationBarLoading'
        // }, {
        //     name: 'hideNavigationBarLoading',
        //     id: 'hideNavigationBarLoading'
        }]
    },

    btnClick(e) {
        let id = e.currentTarget.id;
        switch (id) {
            case 'setNavigationBarColor':
                swan.setNavigationBarColor({
                    frontColor: '#ffffff',
                    backgroundColor: '#0099cc',
                    animation: {
                        duration: 500,
                        timingFunc: 'easeIn'
                    },
                    success: res => {
                        console.log('success:::' + JSON.stringify(res));
                    },
                    fail: err => {
                        console.log('fail:::' + JSON.stringify(err));
                    }
                });
                break;
            case 'setNavigationBarTitle':
                swan.setNavigationBarTitle({
                    title: '我是标题',
                    success: res => {
                        console.log('success:::' + JSON.stringify(res));
                    },
                    fail: err => {
                        console.log('fail:::' + JSON.stringify(err));
                    }
                });
                break;
            case 'showNavigationBarLoading':
                swan.showNavigationBarLoading();
                break;
            case 'hideNavigationBarLoading':
                swan.hideNavigationBarLoading();
                break;
        }
    }
});
