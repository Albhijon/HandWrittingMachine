// Select the Essentials
const page = document.querySelector('.page');
const para = page.querySelectorAll('.text-item');



// Function to generate Random Margins
function setRandomMargin(item, maxMagnitude){
    let translateX = (Math.random() * maxMagnitude * 2) - maxMagnitude;
    item.style.transform = ` translateX(${translateX}px)`;
}

function setRandomHeightWord(item, maxMagnitude){
    let translateY = (Math.random() * maxMagnitude * 2) - maxMagnitude;
    item.style.transform = `translateY(${translateY}px)`;
}

function tilt(item, maxMagnitude){
    let rotate = (Math.random() * maxMagnitude * 2) - maxMagnitude;
    item.style.transform = `rotate(${rotate}deg)`;
}

// Wrap each word in a paragraph in a span tag
for (let i = 0; i < para.length; i++) {
    //Remove all trailing and following spaces
    para[i].textContent = para[i].textContent.trim();
    let words = para[i].textContent.split(' ');
    let result = '';
    for (let j = 0; j < words.length; j++) {
        result += `<span class="word">${words[j]}</span> `;
    }
    para[i].innerHTML = result;
}

const words = page.querySelectorAll('.word');


