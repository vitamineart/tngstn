for(var sky=document.querySelector(".stars"),i=0;i<250;i++){var starStatic='<div class="star" style="--top: '+Math.random()*window.outerHeight+"px; --left: "+Math.random()*window.outerWidth+"px; --width: "+10*Math.random()+'px;"></div>';sky.innerHTML+=starStatic}for(i=0;i<25;i++){var star='<div class="star" style=" --delay: '+(5*Math.random()+5)+"s;  --duration: "+(Math.ceil(2*Math.random())+2)+"s;  --top: "+Math.random()*window.outerHeight+"px; --left: "+Math.random()*window.outerWidth+"px; --width: "+15*Math.random()+'px;"></div>';sky.innerHTML+=star}