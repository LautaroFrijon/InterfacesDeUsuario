"use strict"


//Lapiz y Goma

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let height = canvas.height = window.innerHeight;
let width = canvas.width = window.innerWidth;

ctx.fillStyle = "#E7D40A";
ctx.fillRect(400, 50, 500, 500);

var mouseClicked = false, mouseReleased = true;

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
}


