/**
 * @file demo page for swan
 * @author houyu(houyu01@baidu.com)
 */
Page({
    data: {
        items: [
            {
                title: '领着过万工资，却活出民工生活，住在西二旗附近的低调“百度”人',
                imgsrc: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=443817272,857019512&fm=58',
                tags: [
                    {
                        content: '新华网',
                        className: 'rn-icon-normal'
                    },
                    {
                        content: '17:44',
                        className: 'rn-icon-normal'
                    }
                ]
            },
            {
                title: '领着过万工资，却活出民工生活，住在西二旗附近的低调“百度”人',
                imgsrc: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=443817272,857019512&fm=58'
            }
        ]
    },

    oneItemClick: (e) => {
        swan.navigateTo({
            'url': 'pages/detail/detail'
        });
    },

    loadMore: function () {
        let insertItem = {
            title: '程序猿喜迎佳节，1024万人空巷，都去找三好？？？',
            imgsrc: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1024874097,1179143910&fm=173&s=EF926D8DDB733282513984970300C0C2&w=218&h=146&img.JPEG',
            tags: [
                {
                    content: '新华网',
                    className: 'rn-icon-normal'
                },
                {
                    content: '17:44',
                    className: 'rn-icon-normal'
                }
            ]
        };
        this.dataPush('items', insertItem);
    },

    oneItemTouchStart: () => {
        console.log('oneItemTouchStart');
    },

    oneItemTouchEnd: () => {
        console.log('oneItemTouchEnd');
    },

    onLoad: () => {
        console.log('page-init');
    },

    onReady: () => {
        console.log('onReady');
    },

    onShow: () => {
        console.log('onShow');
    },

    onHide: () => {
        console.log('onHide');
    }
});
