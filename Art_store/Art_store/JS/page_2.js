const circle = document.querySelector('.circle');
const main = document.querySelector('.main');
const circl_wrap = document.querySelector(".circl_wrap");
const scrol = document.querySelector('.scrol')
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
    }, 200)
    setTimeout(() => {
        circl_wrap.style.display = "none"
    }, 1200)
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
img_item = document.querySelectorAll('.img_item');
let posImg_item__X = [0.06987028301886793, 0.40934551886792453, 0.6190055031446541, 0.049921383647798745, 0.3594241352201258, 0.6789259040880503, 0.09984276729559749, 0.4592669025157233];
let posImg_item__Y = [0.039990550755939526, 0.07999797516198705, 0.1499898758099352, 0.3699885259179266, 0.3599993250539957, 0.47998785097192226, 0.6299946004319654, 0.6599959503239741];
posImg_item__X = posImg_item__X.map((item, index) => {
    return item.toFixed(3);
})
posImg_item__Y = posImg_item__Y.map((item, index) => {
    return item.toFixed(3);
})
let windowWidth = window.innerWidth;
img_item.forEach((item, index) => {
    item.style.height = `${parseFloat(item.getBoundingClientRect().width) * 1.3}px`;
});
setInterval(() => {
    if (window.innerWidth != windowWidth) {
        img_item.forEach((item, index) => {
            item.style.height = `${parseFloat(item.getBoundingClientRect().width) * 1.3}px`;
        });
    }
    windowWidth = window.innerWidth;
}, 220);

/////////////////////////////////////////
let controll = (e) => {
    {
        main_width = window.innerWidth / 2;
        main_height = window.innerHeight / 2;
        img_item.forEach((item, index) => {
            if (index == 0) k = 0.0375;
            if (index == 1) k = 0.055;
            if (index == 2) k = 0.0825;
            if (index == 3) k = 0.07;
            if (index == 4) k = 0.3;
            if (index == 5) k = 0.10;
            if (index == 6) k = 0.13;
            if (index == 7) k = 0.053;
            //чем выше коэффициент, тем больше степень вляния(выше скорость)
            //значит, у более "дальних объектов" скорость k меньше
            // k = 0.1;
            if (e.clientY < main_height) {
                y = 125 - parseFloat(item.getBoundingClientRect().height) / 2 + posImg_item__Y[index] * main_height * 2 + (main_height - e.clientY) * k
            } else {
                y = 125 - parseFloat(item.getBoundingClientRect().height) / 2 + posImg_item__Y[index] * main_height * 2 + (main_height - e.clientY) * k
            }
            if (e.clientX < main_width) {
                x = -10 - ((parseFloat(item.getBoundingClientRect().width) / window.innerWidth) - 0.3) * window.innerWidth / 2 + posImg_item__X[index] * main_width * 2 + (main_width - (e.clientX)) * k;
            } else {
                x = -10 - ((parseFloat(item.getBoundingClientRect().width) / window.innerWidth) - 0.3) * window.innerWidth / 2 + posImg_item__X[index] * main_width * 2 + (main_width - (e.clientX)) * k;
            }
            item.style.top = `${y}px`;
            item.style.left = `${x}px`;
        })
    }
}
window.addEventListener('load', () => {
    if (scrollY / window.innerHeight < 10 / 926) {
        window.addEventListener('mousemove', controll);
    }
});


const menu_circle = document.querySelector('.menu_circle');
const menu_wrapper = document.querySelector('.menu_wrapper');

menu_circle.addEventListener('click', (e) => {
    if (menu_wrapper.classList.contains('_active')) {
        menu_wrapper.classList.remove('_active');
        menu_wrapper.style.cssText = `
            position: relative;
            top: ${window.innerHeight / 2 - 93 - 50}px;
            left: ${window.innerWidth / 2 - 50}px;
            z-index: 90;
            height: 100px;
            width: 100px;
            border-radius: 50%;
            background: white;
    `;
        setTimeout(() => {
            menu_wrapper.style.cssText = `
            
            `;

        }, 1000);
        setTimeout(() => { menu_circle.style.background = "url('./img/page_2/menu.png') center/cover no-repeat" }, 300);
    } else {
        menu_wrapper.style.cssText = `
            position: fixed;
            top: ${window.innerHeight / 2 - 93 - parseFloat(getComputedStyle(menu_wrapper).height) / 2 * 10}px;
            left: ${window.innerWidth / 2 - parseFloat(getComputedStyle(menu_wrapper).width) / 2 * 10}px;
            z-index: 90;
            height: 100px;
            width: 100px;
            border-radius: 50%;
            background: white;
    `;
        setTimeout(() => {
            menu_wrapper.style.cssText = `
            position: fixed;
            top: -96px;
            top:0;
            left: 0px;
            z-index: 90;
            height: 100vh;
            width: 100vw;
            border-radius: 0%;
            background: white;
            padding: 20px;
            `;
        }, 700)
        setTimeout(() => { menu_circle.style.background = 'url("./img/page_2/menu_cl.png") center/cover no-repeat'; }, 1400);
        menu_wrapper.classList.add('_active');
    }
});
const second_part = document.querySelector('.second_part');
const menu_circle_2 = document.querySelectorAll('.menu_circle')[1]
const first_part = document.querySelector('.first_part');
window.addEventListener('scroll', (e) => {
    if (parseFloat(second_part.getBoundingClientRect().top) < 80) {

        menu_circle.style.background = "url('./img/page_2/menu_red.png') center/cover no-repeat"
        window.removeEventListener('mousemove', controll);
        // menu_circle.style.background = `url('../img/page_2/menu_red.png') center/cover no-repeat;`
        // menu_circle_2.style.zIndex = 20;
        // first_part.style.zIndex = 0;
    } else {
        menu_circle.style.background = "url('./img/page_2/menu.png') center/cover no-repeat"
        // menu_circle_2.style.zIndex = 4;
        // first_part.style.zIndex = 5;
        window.addEventListener('mousemove', controll);
    }
});
// scrol.addEventListener('mousedown', () => {
//     scrol.addEventListener('mousemove', (e) => {
//         scrol.style.top = `${e.clientY}px`;
//         window.scrollBy(0, parseFloat(scrol.style.top))
//         console.log('move');
//         console.log(e.clientY);
//     });
//     console.log('click');
// });
const linkk = document.querySelectorAll('.menu_li a');
const menu_wrap_wrap = document.querySelector('.menu_wrap_wrap');
linkk.forEach((item) => {
    item.addEventListener('click', (e) => {
        menu_wrapper.classList.remove('_active');
        menu_wrapper.style.cssText = `
                position: relative;
                top: ${window.innerHeight / 2 - 93 - 50}px;
                left: ${window.innerWidth / 2 - 50}px;
                z-index: 90;
                height: 100px;
                width: 100px;
                border-radius: 50%;
                background: white;
        `;
        setTimeout(() => {
            menu_wrapper.style.cssText = ``;
        }, 1000);
        setTimeout(() => { menu_circle.style.background = 'url(../img/page_2/menu.png) center/cover no-repeat'; }, 300);
    })
});