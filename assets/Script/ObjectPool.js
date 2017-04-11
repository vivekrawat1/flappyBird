cc.Class({
    extends: cc.Component,

    properties: {
        PoolArray:{
            default: [],
            type: [cc.Node]
            //visible: false,
     },


    },

   
    onLoad: function () {

    },
    createPool: function( instance, numbers){
        for(var i = 0; i<numbers; i++){
            this.PoolArray[i] = [];
            var obj = cc.instantiate(instance);
            obj.setTag(0);
            this.PoolArray.push(obj);
            
        }
    },
    acquire: function(){
         for(var i = 0; i< this.PoolArray.length; i++)
  {
      if(this.PoolArray[i].getTag() == 0)
      {
        var obj = this.PoolArray[i];
        this.PoolArray[i].setTag(1);
        return obj;
    }
  }

    },
    release: function(){
 
    },

});
