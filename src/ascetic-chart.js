; var asceticChart =function(){
     const recFabric=function(ctx, arrData){
      let dy = parseInt(arrData.height);
      //fixme & todo : find or creqte lib for work with coordinates and matrix 
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(0,0,10,5); 
      
      ctx.fillStyle = "#00FF00";       
      ctx.fillRect(15,0,10,55);
      
      ctx.fillStyle = "#0000FF";       
      ctx.fillRect(30,0,10,35);

      ctx.fillStyle = "#005500";       
      ctx.fillRect(45,0,10,85);

      ctx.fillStyle = "#550000";       
      ctx.fillRect(60,0,10,41);
      
      ctx.fillStyle = "#000088";       
      ctx.fillRect(75,0,10,150);



      ctx.fillStyle = "#FF0000";
      ctx.fillRect(90,dy,10,-5); 
      
      ctx.fillStyle = "#00FF00";       
      ctx.fillRect(105,dy,10,-55);
      
      ctx.fillStyle = "#0000FF";       
      ctx.fillRect(120,dy,10,-35);

      ctx.fillStyle = "#005500";       
      ctx.fillRect(135,dy,10,-85);

      ctx.fillStyle = "#550000";       
      ctx.fillRect(150,dy,10,-41);
      
      ctx.fillStyle = "#000088";       
      ctx.fillRect(165,dy,10,-185);
      
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
