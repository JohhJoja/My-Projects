const circle = document.querySelector('.circle');
const img_wrap = document.querySelectorAll('.img_wrap');
const gal_column = document.querySelectorAll('.gal_column');
const galereia_wrapper = document.querySelector('.galereia_wrapper');
const header = document.querySelector('.header div');
const main = document.querySelector('.main');
const circl_wrap = document.querySelector(".circl_wrap");
width_f_c = Math.max(window.innerHeight, window.innerHeight)
// console.log(width_f_c);
circle.style.cssText = `
    padding: ${width_f_c}px;
    transition-delay: 0s;
    transition-duration: 0s;
    `;
window.addEventListener('load', () => {

    setTimeout(() => {
        circle.style.cssText = `
        transition-delay: -0.2s;
        padding: 0px;
        transition-duration: 1.5s;
        transition-saturation: 1.5s;
        background: rgba(255, 166, 0, 0.61);
        `;
        header.style.left = 0;

    }, 500)
    setTimeout(() => {
        circl_wrap.style.display = "none"
    }, 1500)
});

img_wrap.forEach((item, index) => {
    let random = (Math.random() * 2) + 1;
    if (random < 2) {
        item.style.flex = `1 1 ${parseFloat(getComputedStyle(item).width) * 1}px`
    } else {
        item.classList.add('more_h');
        item.style.flex = `1 1 ${parseFloat(getComputedStyle(item).width) * 1.5}px`
    }

})
let windowWidth = window.innerWidth;
setInterval(() => {
    if (window.innerWidth != windowWidth) {
        img_wrap.forEach((item, index) => {
            if (item.classList.contains('more_h')) {
                item.style.flex = `1 1 ${parseFloat(getComputedStyle(item).width) * 1.5 + 7 / 2}px`
            } else {
                item.style.flex = `1 1 ${parseFloat(getComputedStyle(item).width) * 1}px`
            }
        });
    }
    windowWidth = window.innerWidth; ////////////////////////////////////////////////////////////////////////////////////////////
}, 200); ///////////////////////////////////////////////////////////////////////////////////
// img_wrap.forEach((item, index) => {
//     item.addEventListener('click', (e) => {
//         if (e.target.closest('.big')) {
//             document.getElementsByClassName('big')[0].style.cssText = `
//             flex: ${document.getElementsByClassName('big')[0].style.flex}
//         `;
//             document.getElementsByClassName('big')[0].classList.remove('big');
//             document.body.style.overflow = 'visible';
//             galereia_wrapper.style.paddingRight = '20px';
//         } else {
//             document.getElementsByClassName('big')[0] ? document.getElementsByClassName('big')[0].classList.remove('big') : '';
//             item.style.top = `${window.innerHeight / 2 - parseFloat(galereia_wrapper.getBoundingClientRect().top)}px`;
//             item.style.left = `${window.innerWidth / 2 - parseFloat(item.getBoundingClientRect().left)}px`;
//             item.style.height = `${parseFloat(item.getBoundingClientRect().width) * 1.8 * (item.classList.contains('more_h') ? 1.5 : 1)}px`; //1.8-1.5
//             item.style.width = `${parseFloat(item.getBoundingClientRect().width) * 1.8}px`; //1.8-1.5
//             item.style.border = "1000px solid #808080b0"
//             item.classList.add('big');
//             document.body.style.overflow = 'hidden';
//             item.style.zIndex = 100;
//             galereia_wrapper.style.paddingRight = '33px';
//             console.log(item.getBoundingClientRect());
//             console.log(window.innerWidth);
//             console.log(window.innerWidth / parseFloat(galereia_wrapper.getBoundingClientRect().top));
//             console.log(parseFloat(galereia_wrapper.getBoundingClientRect().top));
//         }
//     });
// });
window.addEventListener('click', (e) => {
    if (!e.target.closest('.big') && document.getElementsByClassName('big')[0]) {
        document.getElementsByClassName('big')[0].style.cssText = `
            flex: ${document.getElementsByClassName('big')[0].style.flex}
        `;
        document.getElementsByClassName('big')[0].classList.remove('big');
        document.body.style.overflow = 'visible';
        galereia_wrapper.style.paddingRight = '20px'
    }
});


gal_column[0].style.top = gal_column[3].style.top = `-${parseFloat(getComputedStyle(img_wrap[0]).height) / 2}px`;
const img_img = document.querySelectorAll('.img_wrap img');
img_img.forEach((item, index) => {
    if (index <= 23) {
        item.setAttribute('src', `./img/img_gal/i${index + 1}.jpg`);
    } else {
        item.setAttribute('src', `./img/img_gal/i${Math.round(Math.random() * (24 - 1) + 1)}.jpg`);
    }
});