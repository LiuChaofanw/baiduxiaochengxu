/**
 * @file demo page for apiDemo
 * @author renzhonghua@baidu.com
 */
/* globals Page, swan */

Page({
    data: {
        title: 'get/setClipboardData',
        items: [{
            name: '复制',
            id: 'setClipboardData'
        }, {
            name: '粘贴',
            id: 'getClipboardData'
        }],
        originData: 'baidu',
        clipboardData: ''
    },

    btnClick(e) {
        let id = e.currentTarget.id;
        switch (id) {
            case 'setClipboardData':
                swan.setClipboardData({
                    data: this.getData('originData'),
                    success: res => {
                        swan.showToast({
                            title: '复制成功'
                        });
                        console.log('success:::' + JSON.stringify(res));
                    },
                    fail: err => {
                        swan.showToast({
                            title: '复制失败'
                        });
                        console.log('fail:::' + JSON.stringify(err));
                    }
                });
                break;
            case 'getClipboardData':
                swan.getClipboardData({
                    success: res => {
                        this.setData('clipboardData', res.data);
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
