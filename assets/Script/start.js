cc.Class({
    extends: cc.Component,

    properties: {
       gameNode: {
           type: cc.Node,
           default:null,
       }
    },

    // use this for initialization
    onLoad: function () {

    },
    onPlayBtn: function(){
        this.node.active =  false;
        this.gameNode.active = true;
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
