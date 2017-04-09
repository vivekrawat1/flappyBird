cc.Class({
    extends: cc.Component,

    properties: {
        startMoving: false,
        gravity: -100,
        rotationVelocity: 50
    },

    // use this for initialization
    onLoad: function () {
        console.log(this.gravity);
        this.velocityY = 0;
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if (this.startMoving) {
            this.velocityY += this.gravity * dt;
            this.node.y += this.velocityY * dt + 0.5 * this.gravity * dt * dt;
            this.node.rotation = this.node.rotation < 90 ? this.node.rotation + this.rotationVelocity * dt : 90;
        }
    },
});
