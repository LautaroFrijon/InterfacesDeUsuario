document.addEventListener("DOMContentLoaded", function(){

//Lapiz

var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

/*ctx.fillStyle = "#FFFFFF";
ctx.fillRect(25, 25, 500, 500);*/


let rect = canvas.getBoundingClientRect();
let x=0, y=0, dibujando = false, color = 'black', grosor = 1;

function defColor(c){
    color=c;
}

function defGrosor(g){
    grosor=g;
}

function dibujar(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = grosor;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}

canvas.addEventListener('mousedown', function(e){
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    dibujando = true;
});

canvas.addEventListener('mousemove', function(e){
    if(dibujando === true){
        dibujar(x, y,  e.clientX - rect.left, e.clientY - rect.top)
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
    }
});

canvas.addEventListener('mouseup', function(e){
    if(dibujando === true){
        dibujar(x, y,  e.clientX - rect.left, e.clientY - rect.top);
        x=0;
        y=0;
        dibujando = false;
    }
});

//Goma.
/*var imagen = document.getElementById('subir');
    imagen.addEventListener('change', subirImagen, false);

function subirImagen(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
          if ((img.width > canvas.width ) || (img.height > canvas.height )){
            if ( (canvas.width/img.width) > (img.height/canvas.height) ){
                  ctx.drawImage(img, 0, (canvas.height - img.height*canvas.width/img.width)/2, canvas.width, img.height*canvas.width/img.width);
            }
            else {
                  ctx.drawImage(img, (canvas.width - img.width*canvas.height/img.height)/2, 0, img.width*canvas.height/img.height, canvas.height);
            }
          }
          else {
                  ctx.drawImage(img,(canvas.width - img.width)/2,(canvas.height - img.height)/2);
          }
        }
        img.src = event.target.result;
    }
    esconderMenues();
    actualizarFiltros();
    reader.readAsDataURL(e.target.files[0]);
}*/



/*let height = canvas.height = window.innerHeight;
let width = canvas.width = window.innerWidth;*/


/*var mouseClicked = false, mouseReleased = true;

function onMouseClick(e){
    mouseClicked = !mouseClicked;
}

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i<6; i++ ){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function onMouseMove(e){
    if(mouseClicked){
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 7.5, 0, Math.PI*2, false);
        ctx.lineWith = 5;
        ctx.stroke();
    }
}*/


//Resetear canvas
document.querySelector("#resetear").addEventListener("click", resetearCanvas);

let width = 500;
let height = 500;

function resetearCanvas(canvas) {
    ctx.clearRect(0, 0, width, height);
  };

})