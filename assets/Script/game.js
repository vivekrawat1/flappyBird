var root = window ;
cc.Class({
    extends: cc.Component,

    properties: {

        bird: {
            default: null,
            type: cc.Node
        },

        groundNode: {
            default: null,
            type: cc.Node
        },
    },

    onLoad: function () {
        root.Game = this;
     },

    onEnable: function () {
        console.log("in game load.");

        this.listenGameStartEvent();
        this.bird.setPosition(cc.p(0,0));
        var moveUpAction = cc.moveBy(0.3, cc.p(0, 150));
        var rotateUp = cc.rotateTo(0.3, -60);

        var combine = cc.spawn(moveUpAction, rotateUp);
        var cf = cc.callFunc(function () {
            this.bird.getComponent('bird').velocityY = 0;
        }.bind(this));
        this.overAllAction = cc.sequence(combine, cf);

    },
    test: function(){
        console.log("mission successful");
    },

    listenGameStartEvent: function () {
        console.log("in game start..");
        var self = this;
        this.node.parent.once(cc.Node.EventType.TOUCH_START, function (event) {
            self.node.getChildByName('getready').active = false;
            self.node.getChildByName('tap').active = false;
            self.node.getChildByName('bird').active = true;
            self.bird.getComponent('bird').startMoving = true;
            self.listenEvent();
        }, this);
    },
   
    listenEvent: function () {
        console.log("in game .");
        var self = this;
        this.groundNode.active = true;
        this.node.parent.on(cc.Node.EventType.TOUCH_START, function (event) {
            self.bird.runAction(this.overAllAction);
          
        }, this);



    },

  
});
