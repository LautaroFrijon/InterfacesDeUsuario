'use strict'

//Primera consigna
const maxFilas = 10;
const maxColum = 10;
let mat= new Array [maxFilas, maxColum];

function cargarMatriz(mat){
    for(let i; i<maxFilas; i++){
        for(let j; j<maxColum; j++){
            mat [i][j] = (int) (math.Random()*maxNum+1);
        }
    }
}


function encontrarNumeroMayor(x){
    let numeroMayor = x[0][0];
    for(let i; i<maxFilas; i++){
        for(let j; j<maxColum; j++){
            if(numeroMayor<x[i][j]){
                numeroMayor = x[i][j]
            }
        }
    }
}

function filasParesEImpares(){

}

//Segunda consigna.

let ctx = document.querySelector('#canvas').getContext("2d");

let width = 500;
let height = 300;

let r = 255;
let g= 0;
let b = 255;
let a = 255;

imageData = ctx.createImageData();

for(x=0; x<width;x++){
    for(y=0; y<height;y++){
        setPixel(imageData, x, y, r, g, b, a);
    }
}