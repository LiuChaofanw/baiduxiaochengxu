/**
 * @file demo page for swan
 * @author yican(yangtianyi01@baidu.com)
 */
/* globals Page swan */
/* eslint-disable fecs-camelcase */
Page({
    data: {
    },
    scrollFunc: e => {
        swan.pageScrollTo({
            scrollTop: 600,
            duration: 800
        });
    }
});
