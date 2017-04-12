var xy = window;
var anything = require('ObjectPool');
cc.Class({
    extends: cc.Component,          

    properties: {
       testObj: {
            default: null,
            type: cc.Prefab
       },
    },

    // use this for initialization
    onLoad: function () {
        xy.TP = this;
        ObjectPool.createPool(this.testObj, 10);
        var arr = ObjectPool.acquire(3, this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
