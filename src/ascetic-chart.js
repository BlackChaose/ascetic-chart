

import _ from 'lodash';

var asceticChart =function(){
      const recFabric=function(ctx, arrData){
      const dy = parseInt(arrData.height);
      const wdh = parseInt(arrData.width);
      const xdim = parseInt(arrData['x-dim']);
      const ydim = parseInt(arrData['y-dim']);

      _.forEach(arrData.arrData,function(el){
         console.log(el);
         ctx.fillStyle = el.color;
         ctx.fillRect(parseInt(el.index -1)*xdim,wdh,dy-el.height*ydim); 
         return;
      });     
    
      return ctx;        
     }
     const Run=(arr)=>{
        obj=document.getElementById(arr.idName);
        const cvs = document.createElement('canvas');
        cvs.className = "ascetic-chart";
        cvs.style.width = arr.width;
        cvs.style.height = arr.height;
        cvs.style.backgroundColor=arr['background-color'];
        obj.append(cvs);
        var ctx = cvs.getContext("2d");
        recFabric(ctx, arr);
     }
     return {Run: Run};
 }();
export default asceticChart;