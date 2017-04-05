cc.Class({
    extends: cc.Component,

    properties: {
        touchNode: {
            default: null,
            type: cc.Node
        },
    },

    // use this for initialization
    onLoad: function () {
        
        this.test();
    },
  
    test: function () {
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function (keyCode, event) { console.log("don't let me down") },
            onMouseUp: function (keyCode, event) { console.log('high all the time') },
            onMouseMove: function () { this.touchNode.setPosition = cc.Event.EventMouse.getLocation()},
            onMouseScroll: function () { console.log("checck yar") },
        }, this.node);
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
