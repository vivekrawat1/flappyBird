//var game = require('game');
cc.Class({
    extends: cc.Component,

    properties: {
     
       
    },
        onLoad: function () {
            this.node.on('GameOver', this.gameOverFunc);
            //this test function is just to test how to use gloabal variable in the scripts, search for Game
            Game.test();
        },
        onEnable: function () {


        },
       
        onReStartGame: function () {
            Game.node.active = true;
            this.node.active = false;
        }
        
    },
);
