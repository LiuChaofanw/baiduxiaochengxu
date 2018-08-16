/**
 * @file test for view component
 * @author houyu01(houyu01@baidu.com)
 */

Page({
    data: {
        canvasShow: false,
        canvasOff: ''
    },
    onLoad() {
        console.log('onLoad');
    },
    canvas() {
        console.log('tap');
    },
    delcanvas() {
        this.setData('canvasShow', false);
    },
    showcanvas() {
        this.setData('canvasShow', true);
        const canvasContext = swan.createCanvasContext('qqqq');
    },
    canvas() {
        console.log('canvas-events');
    },
    mvcan() {
        console.log('canvas-mvcan');
    },
    changeCanvas() {
        !this.getData('canvasOff')
        ? this.setData('canvasOff', 'canvasOff')
        : this.setData('canvasOff', '');
    },
    sendadraw() {
        const ctx = this.createCanvasContext('myCanvas');
        // var ctx = swan.createCanvasContext('myCanvas');
        // ctx.setFillStyle('#0f0f0f');
        // ctx.arc(100, 100, 50, 0, 2 * Math.PI);
        // ctx.fill();
        // ctx.beginPath();
        // ctx.setStrokeStyle('#0000ff');
        // ctx.moveTo(90, 70);
        // ctx.lineTo(70, 80);
        // ctx.lineTo(90, 80);
        // ctx.closePath();
        // ctx.stroke();
        // ctx.beginPath();
        // ctx.setStrokeStyle('#0000ff');
        // ctx.moveTo(130, 70);
        // ctx.lineTo(110, 80);
        // ctx.lineTo(130, 80);
        // ctx.closePath();
        // ctx.stroke();
        // ctx.setFillStyle('#00ff00');
        // ctx.arc(100, 100, 20, 0, 1 * Math.PI);
        // ctx.fill();
        ctx.setFillStyle('#0E28D3');
        ctx.setFontSize(16);
        ctx.textAlign = 'center';
        ctx.fillText('世界很复杂，百度更懂你', 80, 78);
        // ctx.moveTo(100, 50);
        // ctx.setStrokeStyle('#00ff00');
        // ctx.bezierCurveTo(100, 25, 75, 25, 50, 50);
        // ctx.stroke();
        // ctx.moveTo(100, 50);
        // ctx.quadraticCurveTo(75, 25, 50, 50);
        ctx.stroke();
        ctx.draw();
    }
});
