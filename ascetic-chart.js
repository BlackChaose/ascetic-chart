import _ from 'lodash';

 const  Chart = function(){
      let pl = 0; //padding left
      let pt = 0; //padding top
      let pr = 0; //padding right
      let pb = 0; //padding bottom

    const recFabricRec=function(ctx, arrData){
      
      pt = parseInt(arrData['padding-top']); 
      pl = parseInt(arrData['padding-left']); 
      pr = parseInt(arrData['padding-right']); 
      pb = parseInt(arrData['padding-bottom']); 

      const imgHeight = parseInt(arrData.height) + pt + pb;
      const imgWidth = parseInt(arrData.width) + pr + pl;

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
      
         
         //coord for charts
         var leftCornerX = (el.index-1)*chwdh + gap*el.index + pl;
         var leftCornerY = imgHeight - (H*el.height/100)*ydim - pt - pb; //fixme
         var drawWidth = chwdh; //fixme
         var drawHeight = (H*el.height/100)*ydim; //fixme

         // coord notes text on charts
         var ntLeftCornerX = leftCornerX + xdim;
         var ntLeftCornerY = leftCornerY + drawHeight/2;

         // coord notes text under X-Axis
         var ntuLeftCornerX = leftCornerX + xdim/2;
         var ntuLeftCornerY = imgHeight - ydim/2;
       
         ctx.fillStyle = el.color;
         ctx.fillRect(leftCornerX,leftCornerY,drawWidth,drawHeight); 

           if(el.hasOwnProperty('fontStyle')){
            console.log(`! ${el.fontStyle} ${el.fontColor}`);
              ctx.font = el.fontStyle;
              if(el.hasOwnProperty('fontColor')){
                ctx.fillStyle =el.fontColor;
              }else{
                ctx.fillStyle = el.color;
              }
           }else{ctx.font= arrData['chart-font'];}
           if(el.hasOwnProperty('fontColor')){
              ctx.fillStyle = arrData['fontColor'];
              if(el.hasOwnProperty('fontColor')){
                ctx.fillStyle =el.fontColor;
              }else{
                ctx.fillStyle = el.color;
              }
           }else {
              ctx.fillStyle = arrData['chart-font-color'];
           }


         ctx.font = arrData['chart-font'];

         ctx.fillText(el.height+'%', ntLeftCornerX, ntLeftCornerY);     
         
         ctx.fillText(el.text, ntuLeftCornerX, ntuLeftCornerY);

         console.log(leftCornerX,leftCornerY,drawWidth,drawHeight);
         
         return;
      
      });         



      return ctx;        
     }

    const recFabricGrid = function(ctx){

      //! @todo add grid-lines!!!
      return ctx;
    } 

    const recFabricAxis = function(ctx, arrData){
      pt = parseInt(arrData['padding-top']); 
      pl = parseInt(arrData['padding-left']); 
      pr = parseInt(arrData['padding-right']); 
      pb = parseInt(arrData['padding-bottom']); 

      const imgHeight = parseInt(arrData.height) + pt + pb;
      const imgWidth = parseInt(arrData.width) + pr + pl;      

      const xdim = parseInt(arrData['x-dim']);
      const ydim = parseInt(arrData['y-dim']);

      // X-Axis
      ctx.moveTo(0, imgHeight-pb);
      ctx.lineTo(imgWidth, imgHeight - pb);
      ctx.lineTo(imgWidth-xdim, imgHeight - pb + ydim/4);
      ctx.lineTo(imgWidth-xdim, imgHeight - pb - ydim/4);       
      ctx.lineTo(imgWidth, imgHeight - pb);

      // Y-Axis
      ctx.moveTo(pl, imgHeight);
      ctx.lineTo(pl, 0);
      ctx.lineTo(pl + xdim/4, ydim);
      ctx.lineTo(pl - xdim/4, ydim);       
      ctx.lineTo(pl, 0);

      ctx.stroke();
      
      //Axis-Notes

      ctx.fillStyle = arrData['chart-font-color'];
      ctx.fillText(arrData['x-note'], imgWidth - 20, imgHeight - 2 );

      ctx.fillStyle = arrData['chart-font-color'];
      ctx.fillText(arrData['y-note'], 20, 20 );
      //!
      return ctx;
     }

     const recFabricCircle = function(ctx, arrData){
      pt = parseInt(arrData['padding-top']); 
      pl = parseInt(arrData['padding-left']); 
      pr = parseInt(arrData['padding-right']); 
      pb = parseInt(arrData['padding-bottom']); 
      //!!! @todo add circle-chart!
      const imgHeight = parseInt(arrData.height) + pt + pb;
      const imgWidth = parseInt(arrData.width) + pr + pl; 

      const xdim = parseInt(arrData['x-dim']);
      const ydim = parseInt(arrData['y-dim']);

      ctx.beginPath();
      ctx.arc(imgWidth/2, imgHeight/2, Math.min(imgWidth,imgHeight)/2 - (xdim+ydim)/2 , 0, 2 * Math.PI);
      ctx.stroke();      

      return ctx;
     }

     const recFabricError = function(ctx, arrData){
      pt = parseInt(arrData['padding-top']); 
      pl = parseInt(arrData['padding-left']); 
      pr = parseInt(arrData['padding-right']); 
      pb = parseInt(arrData['padding-bottom']); 

      const imgHeight = parseInt(arrData.height) + pt + pb;
      const imgWidth = parseInt(arrData.width) + pr + pl; 

      ctx.fillStyle = 'tomato';
      ctx.font = '36px Terminal';
      ctx.fillText('ERROR! ;-)', pl, imgHeight/2-36 );

      return ctx;
     }

     return function(arr){
     
      console.log("in module AsceticChart, function Run!!!");
      console.log(arr);
     
        var obj=document.getElementById(arr.idName);
     
        console.log(obj);
     
        const cvs = document.createElement('canvas');
        cvs.className = "ascetic-chart";
        cvs.width = parseInt(arr.width) + parseInt(arr['padding-left']) + parseInt(arr['padding-right']);
        cvs.height = parseInt(arr.height) + parseInt(arr['padding-top']) + parseInt(arr['padding-bottom']);
        cvs.style.backgroundColor=arr['background-color'];
        obj.append(cvs);
        var ctx = cvs.getContext("2d");
        if(arr.typeChart==='rectangles'){
        recFabricRec(ctx, arr);
        recFabricAxis(ctx, arr);
        }else if(arr.typeChart==='circle'){
          recFabricCircle(ctx, arr);
        }else{
          recFabricError(ctx, arr);
        }
     }     
   }
export {Chart};