 var K = window;
cc.Class({
    extends: cc.Component,

    properties: {
        PoolArray: {
            default: [],
            type: [cc.Node]
            //visible: false,
        },
        idealInstance: null,


    },


    onLoad: function () {
        K.ObjectPool = this;
    },
    createPool: function (instance, numbers) {
        this.idealInstance = instance;
        for (var i = 0; i < numbers; i++) {
           // this.PoolArray[i] = [];
            var obj = cc.instantiate(instance);
            obj.setTag(0);
            console.log(obj.getTag());
            this.PoolArray.push(obj);

        }
    },
    acquire: function (no, ref) {
        var tempArray = [];
        for (var i = 0, j= 0; i < this.PoolArray.length && j < no ; i++) {
         //   console.log(this.PoolArray[i].getTag());
         var obj = this.PoolArray[i];
         console.log(obj.getTag());
            if ((this.PoolArray[i]).getTag() == 0)
            {
                    var obj = this.PoolArray.splice(i,1);
                    //this.PoolArray[i].setTag(1);
                   // this.tempArray.push(obj);
                    j++;
                    TP.node.addChild(obj);
            }
        }
        

    },
    release: function (instance) {
       this.PoolArray.push(this.idealInstance); 
    },
   

});
