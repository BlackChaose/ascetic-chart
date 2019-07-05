import _ from 'lodash';

 const  Chart = function(){
      const recFabric=function(ctx, arrData){
      const dy = parseInt(arrData.height);
      const wdh = parseInt(arrData.width);
      const chwdh = parseInt(arrData['chart-width']);
      const xdim = parseInt(arrData['x-dim']);
      const ydim = parseInt(arrData['y-dim']);
      
      var numCh = _.size(arrData.aD);
      
      _.forEach(arrData.aD,function(el){
      
         ctx.fillStyle = el.color;
         // var leftCornerX = el.index*xdim;
         var leftCornerX = el.index*chwdh;
         var leftCornerY = dy - el.height*ydim; //fixme
         var drawWidth = chwdh;
         var drawHeight = el.height*ydim; //fixme
         ctx.fillRect(leftCornerX,leftCornerY,drawWidth,drawHeight); 
         console.log(leftCornerX,leftCornerY,drawWidth,drawHeight);
         return;
      
      });         

      return ctx;        
     }

     return function(arr){
      console.log("in module AsceticChart, function Run!!!");
      console.log(arr);
        var obj=document.getElementById(arr.idName);
        const cvs = document.createElement('canvas');
        cvs.className = "ascetic-chart";
        cvs.width = arr.width;
        cvs.height = arr.height;
        cvs.style.backgroundColor=arr['background-color'];
        obj.append(cvs);
        var ctx = cvs.getContext("2d");
        recFabric(ctx, arr);
     }     
   }
export {Chart};