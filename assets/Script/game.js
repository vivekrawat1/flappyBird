cc.Class({
    extends: cc.Component,

    properties: {
        // no need of this node as i m liostening mous event on background node(which is equal in size of canvas)

        // touchNode: {
        //     default: null,
        //     type: cc.Node
        // },
        bird: {
            default: null,
            type: cc.Node
        },
        // ground node with animation;
        groundNode: {
            default: null,
            type: cc.Node
        },
        gameOverNode: {
            default: null,
            type: cc.Node
        },
    },

    // use this for initialization
    onLoad: function () {
        console.log("in game load.");
        //to listen tap press in starting  only...
        this.listenGameStartEvent();
        // actions being used in listenEvent method....
        var moveUpAction = cc.moveBy(0.3, cc.p(0, 150));
        var rotateUp = cc.rotateTo(0.3, -60);

        var combine = cc.spawn(moveUpAction, rotateUp);
        var cf = cc.callFunc(function () {
            this.bird.getComponent('bird').velocityY = 0;
        }.bind(this));
        this.overAllAction = cc.sequence(combine, cf);

    },
    onEnable: function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;

        // Enabled draw collider
        manager.enabledDebugDraw = true;

        // Enabled draw collider bounding box
        manager.enabledDrawBoundingBox = true;
    },

    onCollisionEnter: function (other, self) {

        console.log("on Collision");
    },
    listenGameStartEvent: function () {
        console.log("in game start..");
        var self = this;
        this.node.parent.once(cc.Node.EventType.TOUCH_START, function (event) {
            console.error(event);
            self.node.getChildByName('getready').active = false;
            self.node.getChildByName('tap').active = false;
            self.node.getChildByName('bird').active = true;
            self.bird.getComponent('bird').startMoving = true;
            self.listenEvent();
        }, this);
    },
    //listen contious mouse press events....
    listenEvent: function () {
        console.log("in game .");
        var self = this;
        this.groundNode.active = true;
        this.node.parent.on(cc.Node.EventType.TOUCH_START, function (event) {
            self.bird.runAction(this.overAllAction);
            // this is to detect the collision
            var rect1 = self.bird.getBoundingBox();
            var rect2 = self.groundNode.getBoundingBox();
            if (cc.rectIntersectsRect(rect1, rect2)) {
                console.log("collision detected");
                self.bird.active = false;
                self.groundNode.active = false;
                this.gameOverNode.active = true;
            };

        }, this);



    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
