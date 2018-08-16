/**
 * @file test video componnent
 * @author jianglian(jianglian01@baidu.com)
 */

/* globals Page swan*/
/* eslint-disable new-cap */
Page({
    data: {
        current: 0,
        srcList: ['https://vd3.bdstatic.com/mda-ia8e6q3g23py8qdh/hd/mda-ia8e6q3g23py8qdh.mp4?playlist=%5B%22hd%22%5D&auth_key=1521549485-0-0-d5d042ba3555b2d23909d16a82916ebc&bcevod_channel=searchbox_feed&pd=share', 'https://vd3.bdstatic.com/mda-ib0u8x1bvaf00qa8/mda-ib0u8x1bvaf00qa8.mp4?playlist=%5B%22hd%22%2C%22sc%22%5D'],
        src: 'https://vd3.bdstatic.com/mda-ia8e6q3g23py8qdh/hd/mda-ia8e6q3g23py8qdh.mp4?playlist=%5B%22hd%22%5D&auth_key=1521549485-0-0-d5d042ba3555b2d23909d16a82916ebc&bcevod_channel=searchbox_feed&pd=share',
        loop: false,
        muted: false,
        autoplay: false,
        danmuList: [{
                text: '第 1s 出现的弹幕',
                color: '#ff0000',
                time: 1
            }, {
                text: '第 3s 出现的弹幕',
                color: '#ff00ff',
                time: 3
            }
        ],
        danmuContent: ''
    },
    getRandomColor() {
        let rgb = [];
        for (let i = 0; i < 3; ++i) {
            let color = Math.floor(Math.random() * 256).toString(16);
            color = color.length === 1 ? '0' + color : color;
            rgb.push(color);
        }
        return '#' + rgb.join('');
    },
    onReady(res) {
        this.videoContext = swan.createVideoContext('myVideo');
    },
    bindSendDanmu() {
        let danmuText = this.getData('danmuContent');
        let danmuColor = this.getRandomColor();
        let danmuObj = {
            text: danmuText,
            color: danmuColor
        };
        this.videoContext.sendDanmu(danmuObj);
        this.setData('danmuContent', '');
    },
    bindInputBlur(e) {
        this.setData('danmuContent', e.detail.value);
    },
    play: function (e) {
        console.log('play!');
    },
    pause: function (e) {
        console.log('pause');
    },
    fullscreen: function (e) {
        console.log('fullscreenchange!! 参数是' + JSON.stringify(e));
    },
    ended: function (e) {
        console.log('ended');
        this.next();
    },
    next: function (e) {
        let list = this.getData('srcList');
        let current = (this.getData('current') + 1) % list.length;
        this.setData('src', list[current]);
        this.setData('current', current);
    },
    setloop: function (e) {
        this.setData('loop', !this.getData('loop'));
    },
    setmuted: function (e) {
        this.setData('muted', !this.getData('muted'));
    },
    setautoplay: function (e) {
        let autoplay = this.getData('autoplay');
        this.setData('autoplay', !autoplay);
    }
});
