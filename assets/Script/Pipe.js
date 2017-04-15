cc.Class({
    extends: cc.Component,

    properties: {

        upperPipe: {
            default: null,
            type: cc.Node
        },
        lowerPipe: {
            default: null,
            type: cc.Node
        },
        upperPipeMinHeight: 100,// these are just random values, actual ones can be adjusted from scene
        upperPipeMaxHeight: 100,
        spacingBwPipes: 100,
        velocity: 100

    },

    // use this for initialization
    onLoad: function () {
        this.canvasHeight = this.node.parent.parent.height;
    },
    onEnable: function () {
        this.upperPipe.height = this.upperPipeMinHeight + Math.random() * (this.upperPipeMaxHeight - this.upperPipeMinHeight);
        this.upperPipe.x = this.node.x;
        this.upperPipe.y = this.canvasHeight / 2 - this.upperPipe.height;
        this.lowerPipe.height = this.canvasHeight - this.node.parent.getChildByName('ground').height - this.upperPipe.height - this.spacingBwPipes;
        this.lowerPipe.x = this.node.x;
        this.lowerPipe.y = this.canvasHeight / 2 - this.node.parent.getChildByName('ground').height - this.upperPipe.height - this.spacingBwPipes;
        console.log("asda");
        console.log(this.canvasHeight);
        console.log(this.upperPipe.height);
        console.log(this.upperPipe.x);
        console.log(this.upperPipe.y);
        console.log(this.lowerPipe.height);
        console.log(this.lowerPipe.x);
        console.log(this.lowerPipe.y);
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.node.x += this.velocity * dt;
    },
});
