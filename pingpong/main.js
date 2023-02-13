const game = document.querySelector('.game');
const game_wrapper = document.querySelector('.game_wrapper');
const padL = document.querySelector('.padL');
const padR = document.querySelector('.padR');
const ball = document.querySelector('.ball');
const text = document.querySelector('.text');
console.log(padL);
// console.log(getComputedStyle(game).width);
////////////////
let bg1 = '#db8e00';
let bg2 = '#03db00';
let bg3 = '#00dba8';
let bg4 = '#0039db';
let bg5 = '#c300db';
let bg6 = '#9bdb00';
let background_var = 0;

document.addEventListener('keydown', (e) => {
    if (e.code == 'KeyW') {
        if (parseFloat(getComputedStyle(padL).top) > 0) {
            padL.style.top = `${parseFloat(getComputedStyle(padL).top) - 10}px`;
        }
        if (parseFloat(getComputedStyle(padR).top) > 0) {
            padR.style.top = `${parseFloat(getComputedStyle(padR).top) - 10}px`;
        }
    } else if (e.code == 'KeyS') {
        if (parseFloat(getComputedStyle(padL).top) < parseFloat(getComputedStyle(game).height) - 5 - parseFloat(getComputedStyle(padL).height)) {
            padL.style.top = `${parseFloat(getComputedStyle(padL).top) + 10}px`;
        }
        if (parseFloat(getComputedStyle(padR).top) < parseFloat(getComputedStyle(game).height) - 5 - parseFloat(getComputedStyle(padR).height)) {
            padR.style.top = `${parseFloat(getComputedStyle(padR).top) + 10}px`;
        }
    }


});

setInterval((bg_var) => {
    if (background_var % 6 == 1) game.style.background = bg1;
    if (background_var % 6 == 2) game.style.background = bg2;
    if (background_var % 6 == 3) game.style.background = bg3;
    if (background_var % 6 == 4) game.style.background = bg4;
    if (background_var % 6 == 5) game.style.background = bg5;
    if (background_var % 6 == 0) game.style.background = bg6;
    background_var += 1;
}, 2000, background_var);

let speedX = 7;
let speedY = 5;
let i = 0;
setInterval(() => {
    text.innerHTML = `${i}`;
    if (parseFloat(parseFloat(getComputedStyle(ball).top)) <= 0) {
        speedY = -5;
    } else if (parseFloat(parseFloat(getComputedStyle(ball).top)) >= parseFloat(game.getBoundingClientRect().height) - parseFloat(ball.getBoundingClientRect().height * 2)) {
        speedY = 5;
    }
    ///////////////////// X 
    if (parseFloat(parseFloat(getComputedStyle(ball).left)) <= parseFloat(padL.getBoundingClientRect().width)) {
        if (parseFloat(getComputedStyle(padL).top) <= parseFloat(getComputedStyle(ball).top) && parseFloat(getComputedStyle(ball).top) <= parseFloat(getComputedStyle(padL).top) + parseFloat(getComputedStyle(padL).height)) {
            speedX = 7;
            i++;
        } else {
            setTimeout(() => {
                speedX = 0;
                speedY = 0;
                i = 0;
            }, 390)
            setTimeout(() => {
                ball.style.top = '50%';
                ball.style.left = '50%';
                speedX = 7;
                speedY = 5;
                i = 0;
            }, 1000)
        }
    } else if (parseFloat(parseFloat(getComputedStyle(ball).left)) >= parseFloat(game.getBoundingClientRect().width) - parseFloat(ball.getBoundingClientRect().height * 1.5 + parseFloat(padL.getBoundingClientRect().width))) {
        if (parseFloat(getComputedStyle(padR).top) <= parseFloat(getComputedStyle(ball).top) && parseFloat(getComputedStyle(ball).top) <= parseFloat(getComputedStyle(padR).top) + parseFloat(getComputedStyle(padR).height)) {
            speedX = -7;
            i++;

            console.log(parseFloat(getComputedStyle(ball).top));
            console.log(parseFloat(getComputedStyle(padR).top) + parseFloat(padR.getBoundingClientRect().height));
        } else {
            setTimeout(() => {
                speedX = 0;
                speedY = 0;
                i = 0;
            }, 390)
            setTimeout(() => {
                ball.style.top = '50%';
                ball.style.left = '50%';
                speedX = 7;
                speedY = 5;
                i = 0;
            }, 1000)
        }
    }
    ball.style.top = `${parseFloat(getComputedStyle(ball).top) - speedY}px`;
    ball.style.left = `${parseFloat(getComputedStyle(ball).left) + speedX}px`;
}, 100);





