let words: {word: string, article: string}[] = [];
let correctCount = 0;
let incorrectCount = 0;

fetch('words.json')
    .then(response => response.json())
    .then(data => words = data)
    .catch(error => console.error(error));

document.getElementById('generate')?.addEventListener('click', generateWord);
document.getElementById('check')?.addEventListener('click', checkAnswer);

function generateWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    document.getElementById('word')!.textContent = randomWord.word;
}

function checkAnswer() {
    const enteredArticle = (document.getElementById('answer') as HTMLInputElement).value;
    const currentWord = document.getElementById('word')!.textContent;
    const correctArticle = words.find(word => word.word === currentWord)?.article;

    const resultElement = document.getElementById('result')!;
    if (enteredArticle === correctArticle) {
        resultElement.textContent = 'Correct!';
        resultElement.style.color = 'green';
        correctCount++;
    } else {
        resultElement.textContent = 'Incorrect!';
        resultElement.style.color = 'red';
        incorrectCount++;
    }

    document.getElementById('correctCount')!.textContent = `Correct Answers: ${correctCount}`;
    document.getElementById('incorrectCount')!.textContent = `Incorrect Answers: ${incorrectCount}`;
}