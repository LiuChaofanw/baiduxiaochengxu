/**
 * @file demo page for text
 * @author lvlei(lvlei03@baidu.com)
 */

/* globals Page */
Page({
    data: {
        texts: [
            '20pt', '17pt', '14pt', '13pt'
        ],
        showContent: '这是一段测试文本，可以折行，这是一段测试文本，可以折行，',
        text: '这是一段测试文本，可以折行，',
        n: 2
    },
    setText(n) {
        let showContent = this.getData('text').repeat(n);
        this.setData({
            showContent
        });
    },
    setN(n) {
        this.setData({
            n
        });
    },
    onShow() {
        let n = this.getData('n');
        this.setText(n);
    },
    addLine() {
        let n = this.getData('n');
        n++;
        this.setText(n);
        this.setN(n);
    },
    removeLine() {
        let n = this.getData('n');
        n > 0 && n--;
        this.setText(n);
        this.setN(n);
    }
});
