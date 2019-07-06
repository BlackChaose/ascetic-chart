import _ from 'lodash';

 const  Chart = function(){
      let deltaX = 0;
      let deltaY = 0;
    
    const recFabricRec=function(ctx, arrData){
      
      const imgHeight = parseInt(arrData.height);
      const imgWidth = parseInt(arrData.width);

      const chwdh = parseInt(arrData['chart-width']);
      const chhgt = parseInt(arrData['chart-height']);

      const gap = parseInt(arrData['chart-gap']);

      const xdim = parseInt(arrData['x-dim']);
      const ydim = parseInt(arrData['y-dim']);

      const H = chhgt/ydim;
      const W = chwdh/xdim;
      
      console.warn(arrData);
      
      var numCh = _.size(arrData.aD);
      
      ctx.font = arrData['chart-font'];

      _.forEach(arrData.aD,function(el){
      
         
      
         var leftCornerX = (el.index-1)*chwdh + gap*el.index;
         var leftCornerY = imgHeight - (H*el.height/100)*ydim; //fixme
         var drawWidth = chwdh; //fixme
         var drawHeight = (H*el.height/100)*ydim; //fixme

         var ntLeftCornerX = leftCornerX + xdim/2;
         var ntLeftCornerY = leftCornerY + drawHeight/2;

         ctx.fillStyle = el.color;
         ctx.fillRect(leftCornerX,leftCornerY,drawWidth,drawHeight); 

         ctx.fillStyle = arrData['chart-font-color'];
         ctx.fillText(el.height+'%', ntLeftCornerX, ntLeftCornerY);

         console.log(leftCornerX,leftCornerY,drawWidth,drawHeight);
         
         return;
      
      });         

      return ctx;        
     }

    const recFabricGrid = function(ctx){

      //!
      return ctx;
    } 

    const recFabricAxis = function(ctx){

      //!
      return ctx;
     }


     return function(arr){
     
      console.log("in module AsceticChart, function Run!!!");
      console.log(arr);
     
        var obj=document.getElementById(arr.idName);
     
        console.log(obj);
     
        const cvs = document.createElement('canvas');
        cvs.className = "ascetic-chart";
        cvs.width = arr.width;
        cvs.height = arr.height;
        cvs.style.backgroundColor=arr['background-color'];
        obj.append(cvs);
        var ctx = cvs.getContext("2d");
        recFabricRec(ctx, arr);
     }     
   }
export {Chart};