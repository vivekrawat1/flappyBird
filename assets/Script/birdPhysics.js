
var game = require('game');
cc.Class({
    extends: game,

    properties: {
        currentPosition_Y: 0,
    },

    // use this for initialization
    onLoad: function () {
        this.node.setPosition(-100, 0);
    },
    onEnable: function () {
        var action1 = cc.moveTo(.5, cc.p(-100, 100));

      cc.director.getScheduler().schedule(this.gravity, 2);
       // this.node.runAction(action3);
    },
    gravity: function () {
        this.currentPosition_Y = this.node.getPosition().Y;
        var action2 = cc.moveTo(5, cc.p(-100, this.currentPosition_Y - 1));
    },
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        
    },
});
