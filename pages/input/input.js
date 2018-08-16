/**
 * @file label的示例
 * @author houyu(houyu01@baidu.com)
 */
Page({
    data: {
        inputValue: '',
        focus: false
    },
    bindButtonTap: function () {
        swan.showToast({
            title: 'bindButtonTap'
        });
        this.setData({
            focus: true
        });
    },
    bindKeyInput: function (e) {
        swan.showToast({
            title: 'bindKeyInput'
        });
        this.setData({
            inputValue: e.detail.value
    	});
    },
    bindHideKeyboard: function (e) {
        if (+e.detail.value === 123) {
            swan.showToast({
                title: 'hideKeyboard'
            });
            // swan.hideKeyboard();
            swan.closeInput();
        }
    },
    bindBlur: function () {
        this.setData({
            focus: false
        });
    },
    bindConfirm: function () {
        this.setData({
            focus: false
        });
    }
});
