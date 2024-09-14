const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_meniu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const linkuri = document.querySelectorAll('.navbar_links'); //modificarea stilului unui element sau al unui grup de elemente;
linkuri.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = 'purple';
        link.style.textDecoration = 'underline';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '';
        link.style.textDecoration = '';
    });
});

const images = document.querySelectorAll('#Magazine img'); //manevrarea DOM-ului
images.forEach(img => {
    img.addEventListener('click', function() {
        const existingFigure = document.querySelector(`#Magazine img[src="${img.src}"]`);
        if (existingFigure) {
            existingFigure.parentElement.remove();  //creare si stergere de elemente;
        } else {
            const newFigure = document.createElement('figure');
            newFigure.classList.add('ig'); 
            const newImg = document.createElement('img');
            newImg.src = img.src; 
            newImg.alt = img.alt; 
            newImg.title = img.title; 
            newImg.height = img.height; 
            newFigure.appendChild(newImg);
            document.getElementById('Magazine').appendChild(newFigure);
        }
    });
});

function displayCurrentTime() {
    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString('ro-RO');
    const timeDisplay = document.createElement('p');
    timeDisplay.textContent = 'Data și ora curentă: ' + dateTimeString;
    document.querySelector('#data_si_ora').appendChild(timeDisplay);
}
function getRandomColor() {
    const colors = ['#FF0000', '#00FF00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']; //folosirea a cel putin unei metode din clasele: Math, Array, String, Date;
    const randomIndex = Math.floor(Math.random() * colors.length); //schimbarea aleatoare a valorilor unor proprietati (de exemplu: culoare, dimensiuni, pozitii);
    const randomColor = colors[randomIndex].toLowerCase(); 
    return randomColor;
}
function changeColor() {
    const timeDisplay = document.querySelector('#data_si_ora');
    if (timeDisplay) {
        const randomColor = getRandomColor();
        timeDisplay.style.color = randomColor;
    }
}

setTimeout(displayCurrentTime, 5000); //setTimeout, setInterval;
setInterval(changeColor, 1000);


const mainImg = document.getElementById('main_img'); //folosirea si modificarea evenimentelor generate de mouse si tastatura;
let imgWidth = mainImg.width;
let imgHeight = mainImg.height;
function micsoreazaImaginea() {
    imgWidth *= 0.9;
    imgHeight *= 0.9;
    mainImg.style.width = imgWidth + 'px';
    mainImg.style.height = imgHeight + 'px';
}
function maresteImaginea() {
    imgWidth *= 1.1;
    imgHeight *= 1.1;
    mainImg.style.width = imgWidth + 'px';
    mainImg.style.height = imgHeight + 'px';
}

window.onkeydown = function(event) {
if (event.key === 'a' || event.key === 'A') {
    micsoreazaImaginea();
} else if (event.key === 's' || event.key === 'S') {
    maresteImaginea();
}
} 

document.addEventListener('keydown', handleEventKeyDown);
