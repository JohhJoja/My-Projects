const dots = document.querySelector('.dots');
const prel_wrapper = document.querySelector('.prel_wrapper');

////////////////////////////
//PROJECTS VAR//
const r_btn = document.querySelector('.r_btn');
const l_btn = document.querySelector('.l_btn');
const img_tv = document.querySelector('.imgg');
const video_tv = document.querySelector('.imgg1');
const img_container = document.querySelector('.img_cont');
const targettt = document.getElementsByClassName('targettt')[0];
const block_img = document.querySelector('.block_img');
const block_img_wrap = document.querySelector('.block_img_wrap');
const project_title___ = document.querySelector('.project_title___');
const projects_wrapper = document.querySelector('.projects_wrapper');
/////////////////////////
let i = 0;

let Dots = function (t) {
    if (t == 0) dots.innerHTML = "..";
    if (t == 1) dots.innerHTML = ".";
    if (t == 2) dots.innerHTML = "";
    if (t == 3) {
        dots.innerHTML = "...";
        t = -1;
    }
    setTimeout(Dots, 400, t + 1)
}
let preloader_timer = setTimeout(Dots, 300, 0)

window.onload = function () {
    function load() {
        prel_wrapper.classList.add('remove');
        Dots = null;
        dots.outerHTML = ' ';
        prel_wrapper.outerHTML = ' ';
        clearTimeout(preloader_timer);
    }
    setTimeout(load, 2000);
}

document.documentElement.style.overflow = 'hidden';



const info = document.querySelector('.info_ab')
const skills = document.querySelector('.skills')
const projects = document.querySelector('.projects')
const folder = document.querySelector('.folder');
const v1 = document.querySelector('.v1');
const v2 = document.querySelector('.v2');
const v3 = document.querySelector('.v3');
const transl = document.querySelector('.transl2');
const folder_wrapp = document.querySelector('.folder_wrapp');

function tr_0(elem) {
    function tt() {
        transl.style.top = "100vh";
    }
    setTimeout(tt, 1200);
    elem.style.visibility = 'visible';
    v1.style.visibility = 'hidden';
    v2.style.visibility = 'hidden';
    v3.style.visibility = 'hidden';
    info_content.innerHTML = ''
}
let a;
let aa;
info.onclick = function () {
    a = `
Добро пожаловать на мой сайт! <br><br> Это мой первый крупный проект. В нем я использовал свои
навыки владения Photoshop, использовал preloader, gif, animation, transform и тд. Во вкладке projects вас ждет телевизор
со скрин-превью сайтов, с возможностью перейти на каждый из них. Во вкладке skills - часть резюме (умения) 

`
    console.log('info');
    aa = a.split('');
    info.classList.add('active1');
    info.style.cssText = `
    transition-duration: 0.9s;
    transform: translateY(-1300px) translateX(5px) scale(1.3);
    `
    info.style.zIndex = 11;
    folder.style.marginTop = "120px";
    v3.style.cssText = `transform: rotateZ(1080deg);
    `
    transl.style.opacity = 1;
    transl.style.top = 0;
    folder_wrapp.style.visibility = "hidden";
    setTimeout(tr_0, 800, info);
    setInt(aa.length - 1, aa);
}
projects.onclick = function () {
    console.log('project');
    projects.classList.add('active1');
    projects.style.cssText = `
    transition-duration: 0.9s;
    transform: translateY(-680px) translateX(19px) scale(1.3);`
    projects.style.zIndex = 11;
    folder.style.marginTop = "120px";
    v1.style.cssText = `transform: rotateZ(1080deg) ;`
    transl.style.opacity = 1;
    transl.style.top = 0;
    folder_wrapp.style.visibility = "hidden";
    info_wrapper.style.visibility = 'hidden';
    setTimeout(tr_0, 800, projects);
    setInt1();
}
skills.onclick = function () {
    skills.classList.add('active1');
    skills.style.cssText = `
    transition-duration: 0.9s;
    transform: translateY(-1011px) translateX(33px)scale(1.3);
    `
    skills.style.zIndex = 11;
    folder.style.marginTop = "120px";
    v2.style.cssText = `transform: rotateZ(1080deg);`
    transl.style.opacity = 1;
    transl.style.top = 0;
    folder_wrapp.style.visibility = "hidden"
    setTimeout(tr_0, 800)
}

const info_content = document.querySelector('.info_content');
const info_wrapper = document.querySelector('.info_wrapper');
const return1 = document.querySelector('.return');

info_content.innerHTML = '';

function letters(i, a) {
    let c = a.slice();
    c.length = a.length - i;
    let b = c.join('');
    info_content.innerHTML = b;
    console.log(b);
    if (i == 0) {
        return
    }
    setTimeout(letters, 5, i - 1, a);
}
function inheret() {
    info_wrapper.style.display = 'block';
}
function setInt(count, obj) {
    setTimeout(inheret, 2600)
    setTimeout(letters, 2000, count, obj);
}


const button_return = document.querySelector('.button_return');
button_return.onclick = function () {
    let active_b = document.querySelector('.active1');
    active_b.classList.remove('active1');
    active_b.style.cssText = ``;

    // v1.style.visibility= 'visible';
    // v2.style.visibility= 'visible';
    // v3.style.visibility= 'visible';

    folder.style.marginTop = "";
    v1.style.cssText = ``;
    v2.style.cssText = ``;
    v3.style.cssText = ``;
    transl.style.opacity = '12';
    transl.style.top = '0';
    folder_wrapp.style.visibility = "visible";
    info_wrapper.style.visibility = 'hidden';
    info_content.innerHTML = '';
    aa = '';
    a = '';
    function aaa() {
        transl.style.top = '100vh';

    }
    setTimeout(aaa, 2500);
    // setTimeout(tr_0,800);
}



function inheret1() {
    projects_wrapper.style.display = 'block';
}
function setInt1() {
    setTimeout(inheret1, 2600);
}


document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape') {
        projects_wrapper.style.display = 'none'
        folder_wrapp.style.visibility = 'visible';
        const active = document.querySelector('.active1');
        active.style.cssText = '';
    }
});
// let a =`
// Adress: Belarus, Minsk<br>Dzerzhinsky Avenue No. 95<br>+80(29)120-13-34<br>1123581321dd@gmail.com`
// aa =a.split('');

// const link = document.querySelectorAll('.link');
// link.forEach(function(item,index){

//     item.addEventListener('click',function(e){

//         info_content_wrapper.innerHTML ='';
//         e.preventDefault();
//         function letters(i,a){
//             c = a.slice();
//             c.length = a.length - i;
//             let b = c.join('');
//             info_content_wrapper.innerHTML = b;
//             console.log(i);
//             if(i==0) {
//                 return
//             }
//             setTimeout(letters,50,i-1,a);
//         }
//         function setInt(count,obj){
//             setTimeout(letters,50,count,obj);
//         }
//         if(index==0) setInt(aa.length-1,aa);
//         if(index==1) setInt(b.length-1,b);
//         if(index==2) setInt(a.length-1,a);
//         if(index==3) setInt(a.length-1,a);
//         if(index==4) setInt(a.length-1,a);
//         info_hehe.style.top = '50vh';

//         content_wrapper_img.style.opacity = 0.9;
//     hl.forEach(function(item){
//         item.style.opacity = 0.01;
//     })
//     });
// });


block_img_wrap.style.height = block_img_wrap.getBoundingClientRect().width * 1.083 + 'px'

let sizeH = () => {
    block_img_wrap.style.width = window.innerWidth * 100 / 134 + 'px';
    block_img_wrap.style.height = block_img_wrap.getBoundingClientRect().width * 1.083 + 'px';
}
setInterval(sizeH, 500);
r_btn.addEventListener('mouseover', function () {
    r_btn.style.left = "90%";
    r_btn.style.top = "50%";
});
r_btn.addEventListener('mouseout', function () {
    r_btn.style.left = "93%";
    r_btn.style.top = "52%";
});
l_btn.addEventListener('mouseover', function () {
    l_btn.style.left = "-12%";
    l_btn.style.top = "53%";
});
l_btn.addEventListener('mouseout', function () {
    l_btn.style.left = "-10%";
    l_btn.style.top = "55%";
});

let innokentiu = 0;
let count_of_img = 4;
r_btn.onclick = function () {
    if (innokentiu < count_of_img - 1) {
        innokentiu = innokentiu + 1;
        project_title___.innerHTML = `project name${innokentiu}`;
        img_tv.setAttribute('src', `img${innokentiu}.jpg`);
    }
    else {
        innokentiu = 0;
        project_title___.innerHTML = `project name${innokentiu}`;
        img_tv.setAttribute('src', `img${innokentiu}.jpg`);
    }
}
l_btn.onclick = function () {
    console.log(innokentiu);
    if (innokentiu < count_of_img && innokentiu > 0) {
        innokentiu = innokentiu - 1;
        project_title___.innerHTML = `project name${innokentiu}`;
        img_tv.setAttribute('src', `img${innokentiu}.jpg`);
    }
    else {
        innokentiu = 3;
        project_title___.innerHTML = `project name${innokentiu}`;
        img_tv.setAttribute('src', `img${innokentiu}.jpg`);
    }
}

targettt.addEventListener('mouseenter', function () {
    video_tv.style.zIndex = 5;
});
targettt.addEventListener('mouseleave', function () {
    video_tv.style.zIndex = 1;
});