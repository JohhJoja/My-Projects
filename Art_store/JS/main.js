const fist_1 = document.querySelector('.fist_1');
const fist_2 = document.querySelectorAll('.fist_2');
const button = document.querySelectorAll('button');
const circle = document.querySelector('.circle');
const circle_text = document.querySelector('.circle_text');
const body = document.body;
const fist_side_2 = document.querySelector('.fist_side_2');
let controll = (e) => {

    fist_1.style.top = `${e.clientY - parseFloat(getComputedStyle(fist_1).height)/2}px`;
    fist_1.style.left = `${e.clientX - parseFloat(getComputedStyle(fist_1).width)}px`;

}
window.addEventListener('mousemove', controll);
windowWidth = window.innerWidth;
fist_2.forEach((item) => {
    item.style.width = parseFloat(getComputedStyle(item).height) * 2.1 + 'px';
})
fist_1.style.width = parseFloat(getComputedStyle(fist_1).height) * 2.1 + 'px';
setInterval(() => {
    if (window.innerWidth != windowWidth) {
        fist_2.forEach((item) => {
            item.style.width = parseFloat(getComputedStyle(item).height) * 2.1 + 'px';
        })
        fist_1.style.width = parseFloat(getComputedStyle(fist_1).height) * 2.1 + 'px';
        windowWidth = window.innerWidth;
    }

}, 200)
button.forEach((item, index, array) => {


    item.addEventListener('click', (e) => {
        // controll
        window.removeEventListener('mousemove', controll);
        body.style.cssText = `overflow: hidden;`
        console.log(index);
        console.log(getComputedStyle(fist_2[index]).top);
        fist_1.style.cssText = `
        width: ${parseFloat(getComputedStyle(fist_1).height) * 2.1}px;
        left: ${window.innerWidth/2-parseFloat(getComputedStyle(fist_1).width)}px;
        transition-duration: 1.5s;
        top: ${parseFloat(fist_2[index].getBoundingClientRect().top) +(parseFloat(getComputedStyle(fist_2[index]).width)- parseFloat(getComputedStyle(fist_1).width))*0.42}px
        `;
        fist_2[index].style.cssText = `
           width: ${parseFloat(getComputedStyle(fist_2[index]).height) * 2.1}px;
           left: 0;
        `;
        //console.log(parseFloat(getComputedStyle(fist_2[index]).height) * 2.1);
        //console.log(parseFloat(getComputedStyle(fist_2[index]).height));

        let width_f_c = Math.max(window.innerWidth, window.innerHeight);
        circle.style.cssText = `
        padding: ${width_f_c*0.85}px;
        transition-delay: 1.3s;
        transition-duration: 1.5s;
        background: rgba(255, 166, 0, 1);
        `;
        setTimeout(() => {
            if (index == 0) {
                circle_text.innerHTML = 'imagens'
            } else if (index == 1) {
                circle_text.innerHTML = 'architecture'
            } else if (index == 2) {
                circle_text.innerHTML = 'imagens'
            }

            circle_text.style.cssText = `opacity: 1;`;
        }, 1500);
        setTimeout(() => {
            circle_text.style.cssText = `opacity: 0;`
        }, 2500);
        setTimeout(function() {
            if (index == 0) {
                window.location.href = 'page_1.html';
            } else if (index == 1) {
                window.location.href = 'page_2.html';
            } else if (index == 2) {
                window.location.href = 'page_3.html';
            }
        }, 3500);
    });


});