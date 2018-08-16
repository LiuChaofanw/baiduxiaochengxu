/**
 * @file demo page for apiDemo
 * @author renzhonghua@baidu.com
 */
/* globals Page, swan */

Page({
    data: {
        items: [{
            name: 'requestPayment',
            id: 'requestPayment'
        }, {
            name: 'requestAliPayment',
            id: 'requestAliPayment'
        }],
        order: ''
    },

    inputHandler(e) {
        this.setData('order', e.detail.value);
    },

    btnClick(e) {
        let id = e.currentTarget.id;
        switch (id) {
            case 'requestPayment':
                swan.requestPayment({
                    orderInfo: {
                        service_code: 1,
                        sp_no: '3400000001',
                        order_create_time: '20180123132621',
                        order_no: '20180123132621006455',
                        goods_name: '商品名',
                        goods_desc: '商品描述',
                        goods_url: '',
                        unit_amount: '',
                        transport_amount: '',
                        total_amount: '1',
                        currency: '',
                        buyer_sp_username: '',
                        return_url: 'http://db-testing-eb07.db01.baidu.com:8666/success.html',
                        page_url: '',
                        pay_type: 2,
                        expire_time: '20180125132621',
                        input_charset: 1,
                        version: 2,
                        sign_method: 1,
                        extra: '',
                        pay_quota_balance: '',
                        sign: 'e121b9041dc0130ba3aeb99290fd1aa0'
                    },
                    success: res => {
                        swan.showToast({
                            title: '支付成功'
                        });
                        console.log('success:::' + JSON.stringify(res));
                    },
                    fail: err => {
                        swan.showToast({
                            title: '支付失败'
                        });
                        console.log('fail:::' + JSON.stringify(err));
                    }
                });
                break;
            case 'requestAliPayment':
                swan.requestAliPayment({
                    /* eslint-disable max-len */
                    orderInfo: 'app_id=2015052600090779&biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.01%22%2C%22subject%22%3A%221%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%22%2C%22out_trade_no%22%3A%22IQJZSRC1YMQB5HU%22%7D&charset=utf-8&format=json&method=alipay.trade.app.pay&notify_url=http%3A%2F%2Fdomain.merchant.com%2Fpayment_notify&sign_type=RSA2&timestamp=2016-08-25%2020%3A26%3A31&version=1.0&sign=cYmuUnKi5QdBsoZEAbMXVMmRWjsuUj%2By48A2DvWAVVBuYkiBj13CFDHu2vZQvmOfkjE0YqCUQE04kqm9Xg3tIX8tPeIGIFtsIyp%2FM45w1ZsDOiduBbduGfRo1XRsvAyVAv2hCrBLLrDI5Vi7uZZ77Lo5J0PpUUWwyQGt0M4cj8g%3D',
                    success: res => {
                        swan.showToast({
                            title: '支付成功'
                        });
                        console.log('success:::' + JSON.stringify(res));
                    },
                    fail: err => {
                        swan.showToast({
                            title: '支付失败'
                        });
                        console.log('fail:::' + JSON.stringify(err));
                    }
                });
                break;
        }
    }
});
