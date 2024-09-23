
const questions = [
    {
        question: "When was the first steam engine invented?",
        answers: ["1712", "1849", "1785", "1754"],
        correctAnswer: 0
    },
    {
        question: "What is the name of the most famous steam engine in the world?",
        answers: ["Rolling Stone", "Thomas The Tank Engine", "The Flying Scotsman", "The Flying Dutchman"],
        correctAnswer: 2
    },
    {
        question: "Which country was known for pioneering the steam engines?",
        answers: ["United Kingdom", "Portugal", "France", "Brazil"],
        correctAnswer: 0
    },
    {
        question: "What kind of engine was created that lead to the end of steam engines?",
        answers: ["Car Engines", "Hydrogen Engines", "Diesel Engines", "Electric Engines"],
        correctAnswer: 2
    },
    {
        question: "Who is the creator of the Railway Series Books?",
        answers: ["Robert Awdrey", "Reverand Awdry", "Roderick Awdrey", "Wilbert Robert"],
        correctAnswer: 1
    }
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
}

window.onload = loadQuestions;