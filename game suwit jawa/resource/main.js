const image = document.querySelectorAll('.image-wrapper .image');
const img = document.querySelector('.image-wrapper .image img');
const yourSelection = document.querySelector('.your-selection .image');
const popup = document.querySelector('.popup');
const popupImage = document.querySelectorAll('.popup .image');
const computerSelection = document.querySelector('.computer-selection .image');
const imageWrapper = document.querySelector('.image-wrapper');

let button = document.querySelector('.button');
let hasil = document.querySelector('.result h2');

let selectedImage, h1, p, resetButton, i;
if(!img) {
    checkImage();
}

for(i = 0; i < popupImage.length; i++) {
    popupImage[i].onclick = e => {
        selectedImage = e.target;
        p = e.target.nextElementSibling;
        
        image[0].removeChild(image[0].firstElementChild);
        image[0].append(selectedImage.cloneNode(), p.cloneNode(true));
        popup.style.display = 'none';
        
        setTimeout(generateComputer, 3000);
    }
}

function checkImage() {
    for(i = 0; i < image.length; i++) {
        h1 = document.createElement('h1');
        h1.textContent = 'Silahkan pilih';
        h1.style.textAlign = 'center';
        h1.style.lineHeight = '300px';
        if(i == 1) {
            h1.textContent = 'Otomatis terpilih';
        } 
        image[i].appendChild(h1);
    }
}

function generateComputer() {
    let randomNumber = Math.floor(Math.random()*3);
    image[1].removeChild(image[1].firstElementChild);
    image[1].append(popupImage[randomNumber].firstElementChild.cloneNode(), popupImage[randomNumber].lastElementChild.cloneNode(true));

    setTimeout(winner, 3000);
}
function winner() {
    let yourSelect = imageWrapper.firstElementChild.firstElementChild.lastElementChild.textContent;
    let computerSelect = imageWrapper.lastElementChild.firstElementChild.lastElementChild.textContent;
    
    if(yourSelect == 'Batu') {
        if(computerSelect == 'Gunting') {
            hasil.textContent += ' Anda';
        } else if(computerSelect == 'Kertas') {
            hasil.textContent += ' Computer';
        } else {
            hasil.textContent += ' Tidak ada';
        }
    } else if(yourSelect == 'Gunting') {
        if(computerSelect == 'Kertas') {
            hasil.textContent += ' Anda';
        } else if(computerSelect == 'Batu') {
            hasil.textContent += ' Computer';
        } else {
            hasil.textContent += ' Tidak ada';
        }
    } else {
        if(computerSelect == 'Batu') {
            hasil.textContent += ' Anda';
        } else if(computerSelect == 'Gunting') {
            hasil.textContent += ' Computer';
        } else {
            hasil.textContent += ' Tidak ada';
        }
    }
    gameOver();
}

function gameOver() {
    resetButton = document.createElement('button');
    resetButton.textContent = 'Mulai ulang';
    button.appendChild(resetButton);
    resetButton.addEventListener('click', reset);
}
function reset() {
    resetButton.parentNode.removeChild(resetButton);

    imageWrapper.firstElementChild.firstElementChild.removeChild(imageWrapper.firstElementChild.firstElementChild.firstElementChild);
    imageWrapper.firstElementChild.firstElementChild.removeChild(imageWrapper.firstElementChild.firstElementChild.lastElementChild);
    imageWrapper.lastElementChild.firstElementChild.removeChild(imageWrapper.lastElementChild.firstElementChild.firstElementChild);
    imageWrapper.lastElementChild.firstElementChild.removeChild(imageWrapper.lastElementChild.firstElementChild.lastElementChild);

    let replaceHasil = hasil.textContent.split(':');
    let emptyString = replaceHasil[2] = '';
    hasil.textContent = replaceHasil[0] + ':' + emptyString;
    checkImage();
}

image[0].onclick = function() {
    if(yourSelection.childNodes[0].nodeName == 'IMG') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';
    }
}

window.onclick = e => {
    if(e.target == popup) {
        popup.style.display = 'none';
    }
}