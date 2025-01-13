const wordLevelSpacing = document.querySelector('input[for="wls"]');
const wordLineRandomness = document.querySelector('input[for="wlr"]');;
const randomWordRotation = document.querySelector('input[for="rwr"]');
const letterLevelRandomness = document.getElementById('llr');
const randomLineRotation = document.getElementById('rlr');
const seedValue = document.getElementById('seed');

console.log(randomWordRotation);



//Word Level Spacing
wordLevelSpacing.addEventListener('input', ()=>{
    for(i = 0; i < selectedWords.length; i++){
        setRandomMargin(selectedWords[i], parseInt(wordLevelSpacing.value));
    }
});


//Word Line Randomness
wordLineRandomness.addEventListener('input', ()=>{
    for(i = 0; i < selectedWords.length; i++){
        setRandomHeightWord(selectedWords[i], parseInt(wordLineRandomness.value/10));
    }
});

//Random Word Rotation
randomWordRotation.addEventListener('input', ()=>{
    for(i = 0; i < selectedWords.length; i++){
        tilt(selectedWords[i], parseInt(randomWordRotation.value));
    }
});