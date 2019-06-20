; var asceticChart =function(){
     const Run=(arr)=>{
        obj=document.getElementById(arr.idName);
        const cvs = document.createElement('canvas');
        cvs.className = "ascetic-chart";
        cvs.style.width = arr.width;
        cvs.style.height = arr.height;
        cvs.style.backgroundColor=arr['background-color'];
        obj.append(cvs);
        var ctx = cvs.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(0,0,150,75);        
     }
     return {Run: Run};
 }();
