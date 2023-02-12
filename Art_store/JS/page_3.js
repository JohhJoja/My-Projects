const circle = document.querySelector('.circle');
const header = document.querySelector('.header div');
const main = document.querySelector('.main');
const circl_wrap = document.querySelector(".circl_wrap");
width_f_c = Math.max(window.innerHeight, window.innerHeight)
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