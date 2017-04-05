cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // use this for initialization
    onLoad: function () {

    },
    onPlayBtn: function(){
        this.node.getChildByName('start').active =  false;
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
