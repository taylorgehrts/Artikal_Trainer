"use strict";
var _a, _b;
let words = [];
let correctCount = 0;
let incorrectCount = 0;
fetch('words.json')
    .then(response => response.json())
    .then(data => words = data)
    .catch(error => console.error(error));
(_a = document.getElementById('generate')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', generateWord);
(_b = document.getElementById('check')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', checkAnswer);
function generateWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    document.getElementById('word').textContent = randomWord.word;
}
function checkAnswer() {
    var _a;
    const enteredArticle = document.getElementById('answer').value;
    const currentWord = document.getElementById('word').textContent;
    const correctArticle = (_a = words.find(word => word.word === currentWord)) === null || _a === void 0 ? void 0 : _a.article;
    const resultElement = document.getElementById('result');
    if (enteredArticle === correctArticle) {
        resultElement.textContent = 'Correct!';
        resultElement.style.color = 'green';
        correctCount++;
    }
    else {
        resultElement.textContent = 'Incorrect!';
        resultElement.style.color = 'red';
        incorrectCount++;
    }
    document.getElementById('correctCount').textContent = `Correct Answers: ${correctCount}`;
    document.getElementById('incorrectCount').textContent = `Incorrect Answers: ${incorrectCount}`;
}
