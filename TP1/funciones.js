document.addEventListener("DOMContentLoaded", function(){

//Variables.
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
var imageData = ctx.createImageData(1000, 700);


var color = 'black';
var grosor = 1;
var dibujando = false;
var x = -1;
var y = -1;

////Lapiz.

canvas.addEventListener("mousedown", function(){
    dibujando = true;
  });
  
  canvas.addEventListener("mouseup", function(){
    dibujando = false;
      x = -1;
      y = -1;
  });
  
  
  canvas.addEventListener("mousemove", function(e){
    var x2 = e.layerX - 15;
    var y2 = e.layerY;
    if (dibujando){
      ctx.lineCap = "round";
      ctx.lineWidth = grosor;
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(x,y);
      if(x != -1 && y != -1){
          ctx.moveTo(x, y);
      }
      ctx.lineTo(x, y);
      ctx.stroke();
      x = x2;
      y = y2;
    }
  });






//Subir imagen.

   




//Resetear canvas
document.querySelector("#resetear").addEventListener("click", resetearCanvas);

let width = 500;
let height = 500;

function resetearCanvas(canvas) {
    ctx.clearRect(0, 0, width, height);
};

})