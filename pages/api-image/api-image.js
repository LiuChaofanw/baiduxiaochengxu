/**
 * @file demo page for apiDemo
 * @author renzhonghua@baidu.com
 */
/* globals Page, swan */

Page({
    data: {
        title: 'choose/previewImage'
    },

    chooseImage() {
        swan.chooseImage({
            count: '1',
            sizeType: 'original',
            success: res => {
                swan.showModal({
                    title: '图片选择成功',
                    content: res.tempFilePaths[0],
                    showCancel: false
                });
            }
        });
    },

    previewImage() {
        swan.previewImage({
            urls: [
                'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png',
                'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png'
            ],
            source: 'swan'
        });
    }
});