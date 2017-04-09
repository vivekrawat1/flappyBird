
var game = require('game');
cc.Class({
    extends: cc.Component,

    properties: {
        currentPosition_Y: 0,
        currentPosition_X: 0,
        isTapping: false,
    },

   
    onLoad: function () {
    this.touchEvents();
    },

    touchEvents: function(){

        this.node.parent.on(cc.Node.EventType.TOUCH_START, this.onTap.bind(this));

},
    onTap: function () {
        this.tappingTimerStatus();       
        var action1 = cc.moveTo(.5, cc.p(this.currentPosition_X, this.currentPosition_Y + 100));
        this.node.runAction(action1);
        this.schedule(this.gravity, .5);
         this.schedule(this.isTapping = false, .6);
        //this.isTapping = false;
    },
    gravity: function () {
        if(this.isTapping == false)
        {
            console.log(this.isTapping);
         var action2 = cc.moveTo(.5, cc.p(this.currentPosition_X, this.currentPosition_Y - 100));
        this.node.runAction(action2);
     } },
     tappingTimerStatus: function(){
        this.isTapping != this.isTapping;
     },
     update: function (dt) {
        this.currentPosition_Y = this.node.getPositionY();
        this.currentPosition_X = this.node.getPositionX();

    },
});
