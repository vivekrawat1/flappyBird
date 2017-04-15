var root = window;
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
        pipePrefab: {
            default: null,
            type: cc.Prefab
        }
    },

    onLoad: function () {
        root.Game = this;
    },

    
    onEnable: function () {
        console.log("in game load.");

        this.bird.setPosition(cc.p(0, 0));
        this.listenGameStartEvent();

        //bird movement avtions....
        var moveUpAction = cc.moveBy(0.3, cc.p(0, 150));
        var rotateUp = cc.rotateTo(0.3, -30);
        var combine = cc.spawn(moveUpAction, rotateUp);
        var cf = cc.callFunc(function () {
            this.bird.getComponent('bird').velocityY = 0;
        }.bind(this));
        this.overAllAction = cc.sequence(combine, cf);

        //pipe generation temperory, later object pool is to be used
        this.schedule(function () {
            if(!this.startPipeGeneration){
                return;
            }
            console.log("inside schedule .,..");
            var pipe = cc.instantiate(this.pipePrefab);
            pipe.setPosition(this.node.parent.width / 2, 0);
            this.node.addChild(pipe);
        }.bind(this), 2);




    },
    test: function () {
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
            this.startPipeGeneration = true;
        }, this);



    },


});
