/**
 * @file demo page for apiDemo
 * @author renzhonghua@baidu.com
 */
/* globals Page, swan */

Page({
    data: {
        title: 'uploadFile'
    },

    uploadFile() {
        swan.chooseImage({
            count: '1',
            sizeType: 'original',
            success: res => {
                swan.uploadFile({
                    url: 'http://smartapp.baidu.com/mappconsole/api/checkFile',
                    filePath: res.tempFilePaths[0],
                    name: 'myfile',
                    header: {
                        'Cache-Control': 'no-cache'
                    },
                    success: res => {
                        swan.showToast({
                            title: '上传成功'
                        });
                    },
                    fail: err => {
                        swan.showToast({
                            title: '上传失败'
                        });
                    }
                });
            }
        });
    }
});