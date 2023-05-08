import './style.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';

const body = document.querySelector('body');

function createPictureStrip() {
    const pictureStrip = document.createElement('div');
    pictureStrip.classList.add('p-strip');

    const img1 = new Image(375, 253);
    const img2 = new Image(375, 253);
    const img3 = new Image(375, 253);
    const img4 = new Image(375, 253);
    const img5 = new Image(375, 253);
    img1.src = image1;
    img2.src = image2;
    img3.src = image3;
    img4.src = image4;
    img5.src = image5;
    
    pictureStrip.append(img1, img2, img3, img4, img5);
    return pictureStrip;
}

function createNavDots() {
    function addCircleMoveEvent() {
        const navdots = container.children;
        for (let i = 0; i < navdots.length; i += 1) {

            let decrease = -375;
            let fullDecrease = i * decrease;

            navdots[i].addEventListener('click', () => {
                const strip = document.querySelector('.p-strip');
                strip.style.transform = `translate(${fullDecrease}px)`;
                for (let j = 0; j < navdots.length; j += 1) {
                    navdots[j].classList.remove('active');
                }
                navdots[i].classList.add('active');
            });
        }
    }
    const container = document.createElement('div');
    container.classList.add('navbar');

    for (let i = 0; i < 5; i += 1) {
        const circle = document.createElement('div');
        circle.classList.add('navdot');
        container.append(circle);
    }

    container.children[0].classList.add('active');

    addCircleMoveEvent();
    console.log(container.children)

    return container
}

function createPictureFrame() {
    const element = document.createElement('div');
    element.classList.add('frame');

    element.append(createPictureStrip(), createNavDots());
    return element;
}

let x = 0;

function moveStrip(string) {
    const strip = document.querySelector('.p-strip');
    const navbar = document.querySelectorAll('.navdot');
    if (string == 'next' && x !== -1500) {
        x -= 375;
        console.log(x);
    } else if (string == 'prev' && x !== 0) {
        x += 375;
        console.log(x);
    }

    console.log(navbar);
    switch (x) {
        case 0:
            for (let i = 0; i < navbar.length; i += 1) {
                navbar[i].classList.remove('active');
            }
            navbar[0].classList.add('active');
            break;
        case -375:
            for (let i = 0; i < navbar.length; i += 1) {
                navbar[i].classList.remove('active');
            }
            navbar[1].classList.add('active');
            break;
        case -750:
            for (let i = 0; i < navbar.length; i += 1) {
                navbar[i].classList.remove('active');
            }
            navbar[2].classList.add('active');
            break;
        case -1125:
            for (let i = 0; i < navbar.length; i += 1) {
                navbar[i].classList.remove('active');
            }
            navbar[3].classList.add('active');
            break;
        case -1500:
            for (let i = 0; i < navbar.length; i += 1) {
                navbar[i].classList.remove('active');
            }
            navbar[4].classList.add('active');
            break;
    }


    strip.style.transform = `translate(${x}px)`
}

function createModule() {
    const container = document.createElement('div');
    container.classList.add('p-container');

    const prevBtn = document.createElement('button');
    const frame = createPictureFrame();
    const nextBtn = document.createElement('button');

    prevBtn.classList.add('p-prev');
    nextBtn.classList.add('p-next');
    prevBtn.innerHTML = '&#8592;';
    nextBtn.innerHTML = '&#8594;';

    nextBtn.addEventListener('click', () => {moveStrip('next')});

    prevBtn.addEventListener('click', () => {moveStrip('prev')});

    container.append(prevBtn, frame, nextBtn);
    return container;
}

body.appendChild(createModule());



