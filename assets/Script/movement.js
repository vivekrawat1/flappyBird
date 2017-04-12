cc.Class({
    extends: cc.Component,

    properties: {
       speed: 2,
    },

    // use this for initialization
    onLoad: function () {
        console.log(this.node.getPosition());
        
        this.schedule(this.runIt, 1);
        console.log(this.node.getPosition());
   },
   runIt: function(){
      //var child = this.node.getChildByName('movingObject');
      // console.log( typeof(this.node.getPositionY()));
      // console.log( this.node.getPositionY());
    var action = cc.moveTo(1,cc.p(this.node.x+30, this.node.y));
   this.node.runAction(action);
   },


    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
