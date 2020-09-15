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

//Eventos
document.getElementById("i_file").addEventListener("click", cargarImagen);

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

  var colores = document.getElementsByClassName("color");
  for(i = 0; i < colores.length; i++){
    colores[i].addEventListener("click", function(){
      color = this.id;
    });
  }
  
  var botonGrosor = document.getElementsByClassName("grosor");
  for(i = 0; i < botonGrosor.length; i++){
      botonGrosor[i].addEventListener("click", function(){
          if(this.id == "mas" && grosor < 20){
              grosor = grosor*2;
          }else if(this.id == "menos" && grosor > 1){
              grosor = grosor/2;
          }
      })
  }

  function myDrawImageMethod(image){
    ctx.drawImage(image, 0, 0, image.width, image.height);
  }
  
  //Resetear canvas
  var nuevo = document.getElementById("limpiar");
  nuevo.addEventListener("click", function(){
      for (x = 0; x < canvas.width; x++){
        for (y = 0; y < canvas.heigth; y++){
          setPixel(imageData, x, y, 255, 255, 255, 255);
        }
      }
    ctx.putImageData(imageData, 0, 0);
  });
  
  function setPixel(imageData, x, y, r, g, b, a){
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
  }

//Subir imagen.

var guardarImagen = document.getElementById("guardar");
guardarImagen.addEventListener("click", function(){
  var img = canvas.toDataURL("image/png");
  this.href = img;
});

function cargarImagen(){
  var file = document.getElementById('i_file');
  file.onchange = function(e){
    var img = new Image();
    img.src = URL.createObjectURL(e.target.files[0]);
    img.onload = function(){
        if (img.width>canvas.width){
          var porcentaje = (canvas.width/img.width) * 100;
          img.width = (porcentaje * img.width) / 100;
          img.height = (porcentaje * img.height) / 100;
        }
        if (img.height>canvas.height){
            var porcentaje = (canvas.height/img.height) * 100;
            img.width = (porcentaje * img.width) / 100;
            img.height = (porcentaje * img.height) / 100;
        }
      myDrawImageMethod(this);
      var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.putImageData(imgData, 0, 0);
    }
  }
}
   

})