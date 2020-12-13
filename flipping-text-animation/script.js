let header= document.querySelector(".header h1");
let headerDiv= document.querySelector(".header");
header.innerHTML=header.innerText.split("").map(function(char){
   if(char==" "){
      char = "&nbsp;";
   }
   return "<span>"+char+"</span>";
}).join("");

var checkState=0;

function hoverIn(){
   var t1=anime.timeline({loop:false}).add({
      targets:".header h1 span",
      translateY:[0, "-25px"],
      opacity: [1,0],
      easing: 'cubicBezier(.5, .05, .1, .3)',
      duration: 200,
      delay:function(element,i){
         return i*25;
      }
   })
      t1.add({
         targets:".header h1 span",
         translateY:["25px",0],
         opacity:[0,1],
         easing: 'cubicBezier(.5, .05, .1, .3)',
         duration: 200,
         delay:function(element,i){
            return i*25;
         }
      })
}

function hoverOut(){
   var t2=anime.timeline({loop:false}).add({
      targets:".header h1 span",
      translateY:[0,"25px"],
      opacity:[1,0],
      easing: 'cubicBezier(.5, .05, .1, .3)',
      duration: 200,
      delay:function(element,i){
         return i*25;
      }

   })
   t2.add({
      
      targets:".header h1 span",
      translateY:["-25px",0 ],
      opacity: [0,1],
      easing: 'cubicBezier(.5, .05, .1, .3)',
      duration: 200,
      delay:function(element,i){
         return i*25;
      }
   })
}