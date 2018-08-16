/**
 * @file demo page for apiDemo
 * @author renzhonghua@baidu.com
 */
Page({
    data: {
        items: [{
            name: 'insertWebView',
            id: 'insertWebView'
        }, {
            name: 'updateWebView',
            id: 'updateWebView'
        }, {
            name: 'removeWebView',
            id: 'removeWebView'
        }]
    },

    btnClick(e) {
        let id = e.currentTarget.id;
        switch (id) {
            case 'insertWebView':
                swan.insertWebView({
                    src: 'https://m.baidu.com',
                    slaveId: '1',
                    success: res => {
                        console.log('success:::' + JSON.stringify(res));
                    },
                    fail: err => {
                        console.log('fail:::' + JSON.stringify(err));
                    }
                });
                break;
            case 'updateWebView':
                swan.updateWebView({
                    src: 'https://m.baidu.com',
                    slaveId: '1',
                    success: res => {
                        console.log('success:::' + JSON.stringify(res));
                    },
                    fail: err => {
                        console.log('fail:::' + JSON.stringify(err));
                    }
                });
                break;
            case 'removeWebView':
                swan.removeWebView({
                    slaveId: '1',
                    success: res => {
                        console.log('success:::' + JSON.stringify(res));
                    },
                    fail: err => {
                        console.log('fail:::' + JSON.stringify(err));
                    }
                });
                break;
        }
    }
});