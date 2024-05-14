let words: {word: string, article: string, translation: string}[] = [];
let correctCount = 0;
let incorrectCount = 0;

fetch('words.json')
    .then(response => response.json())
    .then(data => words = data)
    .catch(error => console.error(error));

document.getElementById('generate')?.addEventListener('click', generateWord);
document.getElementById('check')?.addEventListener('click', checkAnswer);
document.getElementById('toggle')?.addEventListener('click', toggleTranslation);

function generateWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    document.getElementById('word')!.textContent = randomWord.word;
    document.getElementById('translation')!.textContent = randomWord.translation;
}

function checkAnswer() {
    const enteredArticle = (document.getElementById('answer') as HTMLInputElement).value;
    const currentWord = document.getElementById('word')!.textContent;
    const correctArticle = words.find(word => word.word === currentWord)?.article;

    if (enteredArticle === correctArticle) {
        document.getElementById('result')!.textContent = 'Correct!';
        document.getElementById('result')!.style.color = 'green';
        correctCount++;
    } else {
        document.getElementById('result')!.textContent = 'Incorrect!';
        document.getElementById('result')!.style.color = 'red';
        incorrectCount++;
    }

    document.getElementById('correctCount')!.textContent = `Correct Answers: ${correctCount}`;
    document.getElementById('incorrectCount')!.textContent = `Incorrect Answers: ${incorrectCount}`;
}

function toggleTranslation() {
    const translationElement = document.getElementById('translation')!;
    const toggleElement = document.getElementById('toggle')!;

    if (translationElement.style.display === 'none') {
        translationElement.style.display = 'block';
        toggleElement.textContent = 'Hide translation';
    } else {
        translationElement.style.display = 'none';
        toggleElement.textContent = 'Show translation';
    }
}