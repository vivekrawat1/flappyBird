cc.Class({
    extends: cc.Component,

    properties: {
      zorder: -10,
    },

    // use this for initialization
    onLoad: function () {
        //var event;
        //event = cc.Touch.getLocation;
     
        console.log(this.node.setLocalZOrder (this.zorder ) );
        
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
