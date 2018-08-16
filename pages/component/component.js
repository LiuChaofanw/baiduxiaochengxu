/**
 * @file demo page for component
 * @author lvlei03@baidu.com
 */

/* eslint-disable */

Page({
    data: {
        items: [{
            icon: '../../images/interface.png',
            name: '视图容器',
            open: false,
            list: [
                {
                    subName: 'view',
                    id: 'view'
                },
                {
                    subName: 'scroll-view',
                    id: 'scroll-view'
                },
                {
                    subName: 'movable-view',
                    id: 'movable-view'
                },
                {
                    subName: 'swiper',
                    id: 'swiper'
                }
            ]
        },
        {
            icon: '../../images/basecontent.png',
            name: '基础内容',
            open: false,
            list: [
                {
                    subName: 'icon',
                    id: 'icon'
                },
                {
                    subName: 'text',
                    id: 'text'
                },
                {
                    subName: 'progress',
                    id: 'progress'
                }
            ]
        },
        {
            icon: '../../images/form.png',
            name: '表单组件',
            open: false,
            list: [{
                subName: 'button',
                id: 'button'
            }, {
                subName: 'checkbox',
                id: 'checkbox'
            }, {
                subName: 'input',
                id: 'input'
            }, {
                subName: 'label',
                id: 'label'
            }, {
                subName: 'picker',
                id: 'picker'
            }, {
                subName: 'radio',
                id: 'radio'
            }, {
                subName: 'slider',
                id: 'slider'
            }, {
                subName: 'switch',
                id: 'switch'
            }]
        },
        {
            icon: '../../images/navigate.png',
            name: '导航',
            open: false,
            list: [{
                subName: 'navigator',
                id: 'navigator'
            }]
        },
        {
            icon: '../../images/media.png',
            name: '媒体组件',
            open: false,
            list: [{
                subName: 'image',
                id: 'image'
            }, {
                subName: 'video',
                id: 'video'
            }
        ]},
        {
            icon: '../../images/location.png',
            name: '地图',
            open: false,
            list: [{
                    subName: 'map',
                    id: 'map'
                }
            ]
        },
        {
            icon: '../../images/canvas.png',
            name: '画布',
            open: false,
            list: [{
                subName: 'canvas',
                id: 'canvas'
            }]
        },
        {
            icon: '../../images/interface.png',
            name: '开放能力',
            open: false,
            list: [{
                subName: 'open-data',
                id: 'open-data'
            }]
        }
    ]
    },

    oneItemClick: e => {
        let viewName = e.currentTarget.dataset.id;
        swan.navigateTo({
            url: '/pages/' + viewName + '/' + viewName
        });
    },

    toggleClick(e) {
        // 无子项直接跳转
        let apiName = e.currentTarget.dataset.id;
        if (apiName) {
            swan.navigateTo({
                url: '/pages/' + apiName + '/' + apiName
            });
            return;
        }
        // 子项展开与收起
        let items = this.getData('items');
        let index = e.currentTarget.dataset.index;
        items[index].open = !items[index].open;
        this.setData('items', items);
    }
});
