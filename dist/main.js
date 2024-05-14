"use strict";
var _a, _b, _c;
let words = [];
let correctCount = 0;
let incorrectCount = 0;
fetch('words.json')
    .then(response => response.json())
    .then(data => words = data)
    .catch(error => console.error(error));
(_a = document.getElementById('generate')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', generateWord);
(_b = document.getElementById('check')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', checkAnswer);
(_c = document.getElementById('toggle')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', toggleTranslation);
function generateWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    document.getElementById('word').textContent = randomWord.word;
    document.getElementById('translation').textContent = randomWord.translation;
}
function checkAnswer() {
    var _a;
    const enteredArticle = document.getElementById('answer').value;
    const currentWord = document.getElementById('word').textContent;
    const correctArticle = (_a = words.find(word => word.word === currentWord)) === null || _a === void 0 ? void 0 : _a.article;
    if (enteredArticle === correctArticle) {
        document.getElementById('result').textContent = 'Correct!';
        document.getElementById('result').style.color = 'green';
        correctCount++;
    }
    else {
        document.getElementById('result').textContent = 'Incorrect!';
        document.getElementById('result').style.color = 'red';
        incorrectCount++;
    }
    document.getElementById('correctCount').textContent = `Correct Answers: ${correctCount}`;
    document.getElementById('incorrectCount').textContent = `Incorrect Answers: ${incorrectCount}`;
}
function toggleTranslation() {
    const translationElement = document.getElementById('translation');
    const toggleElement = document.getElementById('toggle');
    if (translationElement.style.display === 'none') {
        translationElement.style.display = 'block';
        toggleElement.textContent = 'Hide translation';
    }
    else {
        translationElement.style.display = 'none';
        toggleElement.textContent = 'Show translation';
    }
}
