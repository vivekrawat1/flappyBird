cc.Class({
    extends: cc.Component,

    properties: {
        startMoving: false,
        gravity: -100,
        rotationVelocity: 50,
        gameOverNode: {
            type: cc.Node,
            default: null,
        },
    },

  
    onLoad: function () {
        console.log(this.gravity);
        this.velocityY = 0;
        var manager = cc.director.getCollisionManager();


manager.enabled = true;


manager.enabledDebugDraw = true;

manager.enabledDrawBoundingBox = true;

        
    },
onEnable: function(){
    //think think think !!!!!!!!!!
    this.velocityY = 0;
    this.node.rotation = 0;
},
onCollisionEnter: function (other, self) {
    
this.gameOverNode.active = true;
this.node.parent.active = false;
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
