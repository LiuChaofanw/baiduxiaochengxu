/**
 * @demo test for radio component
 * @author lvlei(lvlei03@baidu.com)
 */

Page({
    data: {
        items: [
            {
                value: 'have',
                text: '选中选项',
                checked: true
            },
            {
                value: 'have',
                text: '未选中选项'
            },
            {
                value: 'none',
                text: '未选中选项'
            }
        ],
        result: []
    },

    radioChange: e => {
        console.log(e);
        // this.setData(
        //     'result', e.detail
        // );
    },

    formSubmit: e => {
        console.log('ljh', e);
    }
});