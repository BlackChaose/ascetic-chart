import _ from 'lodash';

 const  Chart = function(){
      let pl = 0; //padding left
      let pt = 0; //padding top
      let pr = 0; //padding right
      let pb = 0; //padding bottom

    
    /**
     * draw Rectangle charts
     * 
     * */
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
      
     
      var numCh = _.size(arrData.aD);
      
      ctx.font = arrData['chart-font'];

      _.forEach(arrData.aD,function(el){
      
         
         //coord for charts (!)
         var leftCornerX = (el.index-1)*chwdh + gap*el.index + pl;
         var leftCornerY = imgHeight - (H*el.height/100)*ydim - pt - pb; //fixme
         var drawWidth = chwdh; //fixme
         var drawHeight = (H*el.height/100)*ydim; //fixme
 
         ctx.fillStyle = el.color;
         ctx.fillRect(leftCornerX,leftCornerY,drawWidth,drawHeight); 

           if(el.hasOwnProperty('fontStyle')){
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

     // coord notes text on charts
	 var textNote = ctx.measureText(el.textNote);
	 
	 if((arrData['showNotes']=== true)&&(textNote.width <= drawWidth)){
		var ntLeftCornerX = leftCornerX + (drawWidth-textNote.width)/2;
		var ntLeftCornerY = leftCornerY + drawHeight/2;
		
		ctx.font = arrData['chart-font'];
		ctx.fillText(el.textNote, ntLeftCornerX, ntLeftCornerY);     
      }
     
	



       // coord notes text under X-Axis
     var ntuLeftCornerX = leftCornerX + xdim/2;
     var ntuLeftCornerY = imgHeight - ydim/2;
     var textNoteUnderAxis = ctx.measureText(el.textNoteUnderAxis);    
     
     if((arrData['showNotesUnderAxis']=== true)&&(textNoteUnderAxis.width <= drawWidth)){
			ctx.fillText(el.textNoteUnderAxis, ntuLeftCornerX, ntuLeftCornerY);
		}
         return;
      
      });         



      return ctx;        
     }





	/**
	 * 
	 *	DRAW DoubleRectangles Chart 
	 *
	 *  */
	const drawDifRecs=function(ctx, arrData){
	  console.log(arrData);
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
      
     
      var numCh = _.size(arrData.aD);
      
      ctx.font = arrData['chart-font'];
	  var cnt = 1;
      _.forEach(arrData.aD,function(el){
      
         
      //coord for charts (!)
		if(cnt%2==0){
         var leftCornerX = (el.index-1)*chwdh + gap*el.index + pl - gap;
         var leftCornerY = imgHeight - (H*el.height/100)*ydim - pt - pb; //fixme
         var drawWidth = chwdh; //fixme
         var drawHeight = (H*el.height/100)*ydim; //fixme
         ctx.fillStyle = arrData.difRecsColors.color1;
		} else{
		 var leftCornerX = (el.index-1)*chwdh + gap*el.index + pl;
         var leftCornerY = imgHeight - (H*el.height/100)*ydim - pt - pb; //fixme
         var drawWidth = chwdh; //fixme
         var drawHeight = (H*el.height/100)*ydim; //fixme
         ctx.fillStyle = arrData.difRecsColors.color2;
			}
         

         ctx.fillRect(leftCornerX,leftCornerY,drawWidth,drawHeight); 

           if(el.hasOwnProperty('fontStyle')){
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

     // coord notes text on charts
	 var textNote = ctx.measureText(el.textNote);
	 
	 if((arrData['showNotes']=== true)&&(textNote.width <= drawWidth)){
		var ntLeftCornerX = leftCornerX + (drawWidth-textNote.width)/2;
		var ntLeftCornerY = leftCornerY + drawHeight/2;
		
		ctx.font = arrData['chart-font'];
		ctx.fillText(el.textNote, ntLeftCornerX, ntLeftCornerY);     
      }
     
	
       // coord notes text under X-Axis
     var ntuLeftCornerX = leftCornerX + xdim/2;
     var ntuLeftCornerY = imgHeight - ydim/2;
     var textNoteUnderAxis = ctx.measureText(el.textNoteUnderAxis);    
     
     if((arrData['showNotesUnderAxis']=== true)&&(textNoteUnderAxis.width <= drawWidth)){
			ctx.fillText(el.textNoteUnderAxis, ntuLeftCornerX, ntuLeftCornerY);
		}
		
	
        cnt+=1;
      
      });         

     return ctx;        
     }


	/**
	 * Draw grid lines
	 * 
	 * */
    const recFabricGrid = function(ctx){

      //! @todo add grid-lines!!!
      return ctx;
    } 
    
    /**
     * draw Axis 
     * */	
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
	
	 /**
     * convert angle in degrees to angle in radian
     * */
	 const DegToRad = function(alpha){
		 	// 1 deg == Math.PI/180 rad
			return alpha * Math.PI /180;
		}	
		
	/**
	 * 
	 *	draw one Sector of circle 
	 * 	
	 * */	
	 const drawSector = function(ctx, color, xo, yo, radius, beginAng, endAng){
	  
	  var alpha = DegToRad(beginAng);
	  var gamma = DegToRad(endAng);
	 	  
	  ctx.beginPath();
	  ctx.fillStyle = color;    
	  ctx.moveTo(xo,yo);
      ctx.lineTo(xo+radius*Math.cos(alpha),yo+radius*Math.sin(alpha));      
      ctx.arc(xo, yo, radius, alpha, gamma);
      ctx.lineTo(xo,yo);
      ctx.closePath();
      //ctx.stroke();
      ctx.fill();
       
	  return;
	 }
	 
	 /**
	  * draw text
	  * @configMarker  {ctx, x, y, font, fontColor, perText, noteText, gap, radius, height, width 
	  * @return void
	  * */
	 const drawText = function(ctx, config){
		 ctx.fillStyle = config.fontLegendColor;
         ctx.font = config.fontStyle;
         ctx.fillText(config.textLegend, config.tx, config.ty); 
                  
         return;
	 }
	 
	 /**
	  * draw one marker for legend
	  * @ctx	context		context
	  * @config	object		settings
	  * @flag	string		'circle' or 'rectangle' - visual part
	  * */
	 const drawMarker = function(ctx, config){
		if(config.typeLegend === 'Circle'){			
			drawSector(ctx, config.color, config.x, config.y, config.radius, 0, 360);
			//drawSector(ctx, config.color, 10, 10, config.radius, 0, 360);
		}else{
			ctx.fillStyle = config.color;
			ctx.fillRect(config.x,config.y,config.drawWidth,config.drawHeight); 
			}
		
		drawText(ctx, config);			
		
		return ctx;
	 }
	 
	 const drawLegend = function(ctx, arrConfigs){
	    var numEl = _.size(arrConfigs.aD);
		var dy = parseInt(arrConfigs.legendHeight)/(numEl+1);
		var delta = dy;
	    _.forEach(arrConfigs.aD,function(config){
				config.x = parseInt(arrConfigs.legendPl);
				config.y = delta + dy;
				config.radius = parseInt(arrConfigs['y-dim']);
				config.tx = config.x+parseInt(arrConfigs['x-dim'])*3;
				config.ty = delta + dy + config.radius/2;
				config.typeLegend = arrConfigs.typeLegend;
				config.fontStyle = arrConfigs['fontLegendStyle'];								
				dy+=delta;
				drawMarker(ctx, config);
			});
	 }	 
	 
	 /**
	  * get text by secors params
	  *
	  *  */
	 const getTextSecParams = function(tW, radius, beginAng, endAng, xo, yo){
		  var bA = DegToRad(beginAng);
		  var eA = DegToRad(endAng);
		  var rK = 0.65;
		  var psi = Math.PI - bA + (eA-bA)/2; 
		  var res1={"txtX": xo - (radius*rK)*Math.cos(psi), "txtY": yo + (radius*rK)*(Math.sin(psi))};	
		  return res1;
		 }
	 
	/**
	 * draw Circle Chart
	 * 
	 * */	
     const recFabricCircle = function(ctx, arrData){
      pt = parseInt(arrData['padding-top']); 
      pl = parseInt(arrData['padding-left']); 
      pr = parseInt(arrData['padding-right']); 
      pb = parseInt(arrData['padding-bottom']); 

      const imgHeight = parseInt(arrData.height) + pt + pb;
      const imgWidth = parseInt(arrData.width) + pr + pl; 

      const xdim = parseInt(arrData['x-dim']);
      const ydim = parseInt(arrData['y-dim']);
	  
	  var gamma=45;
	  var xo = imgWidth/2;
	  var yo = imgHeight/2;
	  var radius =  Math.min(imgWidth,imgHeight)/2 - (xdim+ydim)/2;

	  var sum = _.reduce(arrData.aD, function(acc,item){
		  return acc+=item.height;
		  },0);

	  var sectors = _.map(arrData.aD,function(el){
			var res = {};
			res.index = el.index;
			res.beginAng = 0 ;
			res.endAng =(el.height/sum)*360;
			res.color = el.color;
			res.textNote = el.textNote;
			res.fontStyle = el.fontStyle;
			res.fontNoteColor = el.fontNoteColor;
			return res;
		  });

      var deltaAng = 0;

      _.forEach(sectors,function(el){
		  drawSector(ctx,el.color,xo,yo,radius,el.beginAng+deltaAng,el.endAng+deltaAng);
		  deltaAng +=el.endAng;
		  
		var tN = ctx.measureText(el.textNote);
		var tParams = getTextSecParams(tN.width, radius, el.beginAng + deltaAng, el.endAng + deltaAng, xo, yo);
	
		if((arrData['showNotes']=== true)&&(tParams!== null)){
				var ntLeftCornerX = tParams.txtX;
				var ntLeftCornerY = tParams.txtY;

				ctx.font = el.fontStyle || arrData['chart-font'];
				ctx.fillStyle = el.fontNoteColor || arrData['chart-font-color'];
				//console.warn(ctx.font, ctx.fillStyle);				
				ctx.textAlign="center"; 
				ctx.fillText(el.textNote, ntLeftCornerX, ntLeftCornerY);    
			}
		  });   
      return ctx;
     }

	 /**
	  * Handle & outpute errors
	  * 
	  * */
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
    
        var obj=document.getElementById(arr.idName);   
  
        const cvs = document.createElement('canvas');
        cvs.className = "ascetic-chart";
        if(arr.typeChart !== 'legend'){
			cvs.width = parseInt(arr.width) + parseInt(arr['padding-left']) + parseInt(arr['padding-right']);
			cvs.height = parseInt(arr.height) + parseInt(arr['padding-top']) + parseInt(arr['padding-bottom']);
		}else{
			cvs.width = parseInt(arr.legendWidth) + parseInt(arr['padding-left']) + parseInt(arr['padding-right']);
			cvs.height = parseInt(arr.legendHeight) + parseInt(arr['padding-top']) + parseInt(arr['padding-bottom']);
			}
        cvs.style.backgroundColor=arr['background-color'];
        obj.append(cvs);
        var ctx = cvs.getContext("2d");
        if(arr.typeChart==='rectangles'){
			recFabricRec(ctx, arr);
        if(arr['showAxis']){
			recFabricAxis(ctx, arr);
		}
        }else if(arr.typeChart==='circle'){
          recFabricCircle(ctx, arr);
        }else if(arr.typeChart==='legend'){
		   drawLegend(ctx, arr)
		}else if(arr.typeChart === 'difRecs'){
			drawDifRecs(ctx, arr);
			}else {
          recFabricError(ctx, arr);
          }     
   }
}
export {Chart};
