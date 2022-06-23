var temp = 0;
    var tens = 0;
    var s=0;
    var ss=0;
    var stop = document.getElementById("stop");
    var start = document.getElementById("start");
    var reset = document.getElementById("reset");
    var sec = document.getElementById("sec");
    var ms = document.getElementById("ms");
    var st;
    start.addEventListener("click", function(){
       if(start.onclick==true) return;
       st = setInterval(function(){
          temp++;
          
          if(temp>9){
            tens++;
            temp=0;
            if(tens>9 ){
              s++;
              tens=0;
              temp=0;
              
          }
          }
          sec.innerHTML= ss + "" + s;
          ms.innerHTML = tens  + "" + temp;
          start.disabled=true;
       } , 10); 
       
    });
    
    stop.addEventListener("click", function(){
       clearInterval(st);
       start.disabled=false;
    });
   
    reset.addEventListener("click", function(){
       clearInterval(st);
       tens=0;
              temp=0;
              s=0;
              ss=0;
       sec.innerHTML= "00";
          ms.innerHTML = "00";
          start.disabled=false;
    });