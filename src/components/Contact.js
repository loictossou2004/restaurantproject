// import React from 'react'
import '../App.css'

function Contact() {

}

export default Contact

setInterval(() => { 
    var secret = document.querySelector('.secret');
    var lilboo = document.querySelector('.lilboo');
    var midboo = document.querySelector('.midboo');
    var bigboo = document.querySelector('.bigboo');
    var life = document.querySelector('.life');
    var burger = document.querySelector('.burger');
    var candy = document.querySelector('.candy');
    var veggy = document.querySelector('.veggy');
    var gem = document.querySelector('.gem');
    var food = document.querySelector('.food');
    var coin = document.querySelector('.coin');
    if (lilboo) {
        lilboo.click();
    }
    if (midboo) {
        midboo.click();
    }
    if (bigboo) {
        bigboo.click();
    }
    if (life) {
        life.click();
    }
    if (burger) {
        burger.click();
    }
    if (candy) {
        candy.click();
    }
    if (veggy) {
        veggy.click();
    }
    if (coin) {
        coin.click();
    }
    if (food) {
        food.click();
    }
    if (gem) {
        gem.click();
    }
    if (secret) {
        secret.click();
    }
},1);

