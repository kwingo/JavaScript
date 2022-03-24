/*
    N220 Section (45264)
    Kirk Wingo
    Week 2 Intro Lab 
    September 1, 2021
*/

"use strict";

const Ball = {
    posX: 44,
    posY: 64,
    radius: 50,
    color: "blue",
    velX: 3,
    velY: 3,

};

const Canvas = {

    width: 800,
    height: 600,
    bgColor: "red",

};

function setup() {

    console.log("test")

    frameRate(30);


    createCanvas(Canvas.width, Canvas.height);

    let z = 15;

    Ball.posX = 50;
    Ball.posY = 88;
}

function draw() {

    if (keyIsUp(DOWN_ARROW)) {

        Ball.posY -= 5;
    }

    let x = 44

    let ballOnTop = Ball.posX != 600;

    let ballOnBottom = Ball.posX < 200;

    if (!ballOnBottom) {

        let y = 72
    }
}