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
         this.gameNode.active = true;
        this.node.active =  false;
    },
   
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
