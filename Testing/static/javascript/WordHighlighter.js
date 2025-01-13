const wordSelector = document.querySelector('#selectorrange');
var selectedWords = randomWordsSelector(38);
let isMouseDown = false;

function makeYellow(item){
    item.classList.add('yellow');
}
function removeYellow(item){
    item.classList.remove('yellow');
}


function randomWordsSelector(maxPercentage){
    selectedWords = [];
    for(let i = 0; i<para.length; i++){
        let words = para[i].querySelectorAll('.word');
        for(let j = 0; j<words.length; j++){
            if(Math.random()*100 < maxPercentage){
                selectedWords.push(words[j]);
            }
        }
    }
    return selectedWords;
}


const selector = document.querySelector('#selectorrange');
selector.addEventListener('input', function() {
    
    // Start over every time by removing all yellow words
    for (let i = 0; i < para.length; i++) {
        let words = para[i].querySelectorAll('.word');
        for (let j = 0; j < words.length; j++) {
            removeYellow(words[j]);
        }
    }

    let maxPercentage = selector.value;
    selectedWords = randomWordsSelector(maxPercentage);
    for (let i = 0; i < selectedWords.length; i++) {
        makeYellow(selectedWords[i]);
    }
});


// Mouse event listners for clicking and preview changes
selector.addEventListener('mousedown', function(){
    for (let i = 0; i < selectedWords.length; i++) {
        makeYellow(selectedWords[i]);
    }
});

selector.addEventListener('mouseup', function(){
    for(let i = 0; i<para.length; i++){
        let words = para[i].querySelectorAll('.word');
        for(let j = 0; j<words.length; j++){
            removeYellow(words[j]);
        }
    }
});


for(i=0; i<selectedWords.length; i++){
    selectedWords[i].style.display = 'inline-block';
}



