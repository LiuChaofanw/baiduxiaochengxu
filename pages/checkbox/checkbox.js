/**
 * @file test for checkbox component
 * @author lijiahui(lijiahui02@baidu.com)
 */

Page({
    data: {
        items: [
            {
                value: 'China',
                text: '中国'
            },
            {
                value: 'US',
                text: '美国'
            },
            {
                value: 'Britain',
                text: '英国',
                checked: true
            }
        ],
        result: []
    },

    checkboxChange: e => {
        console.log(e);
        // this.setData(
        //     'result', e.detail
        // );
    },

    formSubmit: e => {
        console.log('ljh', e);
    }
});