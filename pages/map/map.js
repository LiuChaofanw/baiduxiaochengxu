/**
 * @file demo page for map
 * @author lvlei03@baidu.com
 */
/* globals Page, swan */
/* eslint-disable new-cap */
Page({
    data: {
        scale: 16,
        latitude: '40.048828',
        longitude: '116.280412',
        markers: [{
            markerId: '1',
            latitude: '40.052751',
            longitude: '116.278796'
        }, {
            markerId: '2',
            latitude: '40.048828',
            longitude: '116.280412',
            callout: {
                display: 'ALWAYS',
                content: '百度科技园'
            }
        }, {
            markerId: '3',
            latitude: '40.049655',
            longitude: '116.27505',
            callout: {
                display: 'ALWAYS',
                content: '西山壹号院'
            }
        }],
        showLocation: true,
        polyline: [{
            points: [{
                longitude: 116.278796,
                latitude: 40.048828
            }, {
                longitude: 116.27505,
                latitude: 40.049655
            }],
            color: '#FF5F41FF',
            width: 2,
            dottedLine: true
        }],
        controls: [{
            controlId: 1,
            iconPath: '/images/api_logo.png',
            position: {
                left: 0,
                top: 100,
                width: 50,
                height: 50
            },
            clickable: true
        }],
        circles: [{
            latitude: '40.052751',
            longitude: '116.278796',
            color: '#FF5F41FF',
            fillColor: '#21FFFFFF',
            radius: '200',
            strokeWidth: '2'
        }],
        items: [{
            name: 'openLocation',
            id: 'openLocation'
        }, {
            name: 'getCenterLocation',
            id: 'getCenterLocation'
        }, {
            name: 'moveToLocation',
            id: 'moveToLocation'
        }, {
            name: 'translateMarker',
            id: 'translateMarker'
        }, {
            name: 'includePoints',
            id: 'includePoints'
        }, {
            name: 'getRegion',
            id: 'getRegion'
        }, {
            name: 'getScale',
            id: 'getScale'
        }]
    },
    onLauch() {
        console.log('map onLauch');
    },
    onReady() {
        console.log('map ready');
        this.mapContext = swan.createMapContext('myMap');
    },
    updateData() {
        console.log('udpate');
        this.setData('scale', 12);
    },
    updateRadius() {
        console.log('修改半径：');
        this.setData('circles', [{
            latitude: '40.052751',
            longitude: '116.278796',
            color: '#FF5F41FF',
            fillColor: '#21FFFFFF',
            radius: '1000',
            strokeWidth: '2'
        }]);
    },
    // 以下测试NA回调，之后删除
    onMarkertap(e) {
        console.log('onMarkertap callback:');
        console.log(e);
        swan.showToast({
            title: 'onMarkertap'
        });
    },
    onCallouttap(e) {
        console.log('onCallouttap callback:');
        console.log(e);
        swan.showToast({
            title: 'onCallouttap'
        });
    },
    onControltap(e) {
        console.log('onControltap callback:');
        console.log(e);
        swan.showToast({
            title: 'onControltap'
        });
    },
    onRegionchange(e) {
        console.log('onRegionchange callback:');
        console.log(e);
        swan.showToast({
            title: 'onRegionchange'
        });
    },
    onTap(e) {
        console.log('onTap callback:');
        console.log(e);
        swan.showToast({
            title: 'onTap'
        });
    },
    onUpdated(e) {
        console.log('onUpdated callback::');
        console.log(e);
        swan.showToast({
            title: 'onUpdated'
        });
    },
    getLoaction() {
        swan.getLocation({
            type: 'wgs84',
            altitude: true,
            success: res => {
                console.log('location:::::::');
                console.log(res);
            },
            fail: err => {
                swan.showToast({
                    title: '获取失败'
                });
            }
        });
    },

    // 以下测试api，之后删除
    btnClick(e) {
        const id = e.target.id;
        const mapId = 'myMap';
        const mapCtx = swan.createMapContext('myMap');
        const slaveId = this.privateProperties.slaveId;
        switch (id) {
            case 'getCenterLocation':
                mapCtx.getCenterLocation({
                    mapId,
                    slaveId,
                    success(res) {
                        console.log('getCenterLocation success~ ' + JSON.stringify(res));
                    },
                    fail(err) {
                        console.log('getCenterLocation fail! ' + JSON.stringify(err));
                    }
                });
                break;
            case 'moveToLocation':
                mapCtx.moveToLocation({
                    mapId: 'myMap',
                    slaveId
                });
                console.log('moveToLocation:::');
                break;
            case 'translateMarker':
                mapCtx.translateMarker({
                    mapId,
                    slaveId,
                    markerId: '1',
                    autoRotate: true,
                    duration: '1000',
                    destination: {
                        latitude: '23.10229',
                        longitude: '113.3345211'
                    },
                    animationEnd() {
                        console.log('animation end');
                    }
                });
                break;
            case 'includePoints':
                mapCtx.includePoints({
                    mapId,
                    slaveId,
                    padding: [10],
                    points: [{
                        longitude: '116.394495',
                        latitude: '39.932642'
                    }, {
                        longitude: '116.394495',
                        latitude: '39.110226'
                    }, {
                        longitude: '114.996876',
                        latitude: '38.522789'
                    }]
                });
                break;
            case 'getRegion':
                mapCtx.getRegion({
                    mapId,
                    slaveId,
                    success(res) {
                        console.log('getRegion success~ ' + JSON.stringify(res));
                    },
                    fail(err) {
                        console.log('getRegion fail! ' + JSON.stringify(err));
                    }
                });
                break;
            case 'getScale':
                mapCtx.getScale({
                    mapId,
                    slaveId,
                    success(res) {
                        console.log('getScale success~ ' + JSON.stringify(res));
                    },
                    fail(err) {
                        console.log('getScale fail! ' + JSON.stringify(err));
                    }
                });
                break;
            case 'openLocation':
                swan.openLocation({
                    mapId,
                    slaveId,
                    longitude: 113.3245211,
                    latitude: 23.10229,
                    scale: 16,
                    name: '故宫',
                    success: res => {
                        console.log('open....');
                        console.log(res);
                    },
                    fail: err => {
                        console.log('err');
                        console.log(err);
                    }
                });
                break;
        }
    }
});