// Select the Essentials
const page = document.querySelector('.page');
const para = page.querySelectorAll('.text-item');

// Function to generate Random Margins
function setRandomMargin(item, maxMagnitude){
    let translateX = (Math.random() * maxMagnitude * 2) - maxMagnitude;
    item.style.transform += ` translateX(${translateX}px)`;
    console.log(`Set translateX to ${translateX}px for`, item);
}

function setRandomHeightWord(item, maxMagnitude){
    let translateY = (Math.random() * maxMagnitude * 2) - maxMagnitude;
    item.style.transform += `translateY(${translateY}px)`;
    console.log(`Set translateY to ${translateY}px for`, item);
}

function tilt(item, maxMagnitude){
    let rotate = (Math.random() * maxMagnitude * 2) - maxMagnitude;
    item.style.transform += `rotate(${rotate}deg)`;
    console.log(`Set rotate to ${rotate}deg for`, item);
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

// Set Random Margins for each word
for (let i = 0; i < words.length; i+=2) {
    words[i].style.display = 'inline-block';
    setRandomMargin(words[i], 5);
    setRandomHeightWord(words[i], 2);
    tilt(words[i], 3);
}

// set random tilt for each para
for (let i = 0; i < para.length; i++) {
    tilt(para[i], 1);
}