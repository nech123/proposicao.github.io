const quizData = [
    {
        question: '1 - Das frases a seguir, a única que representa uma proposição é:',
        a: 'Ronaldo, venha até aqui, por favor.',
        b: 'Que tarde agradável!',
        c: 'Sim.',
        d: 'Maria Preparou os documentos.',
        e: 'Onde estão os Documentos?',
        correct: 'd'
    },  {
        question: '2 - Das afirmações abaixo, qual representa uma proposição?',
        a: 'O céu é azul.',
        b: 'Como vai você?',
        c: 'Talvez.',
        d: 'Marcos chegou em casa.',
        e: 'Onde está a chave?',
        correct: 'a'
    },
    {
        question: '3 - Qual das seguintes frases é uma proposição?',
        a: 'O cachorro late.',
        b: 'Que dia lindo!',
        c: 'Sim.',
        d: 'Ana comprou um presente.',
        e: 'Onde está o presente?',
        correct: 'd'
    },
    {
        question: '4 - Das sentenças abaixo, qual é uma proposição?',
        a: 'Vamos ao parque?',
        b: 'Que tarde ensolarada!',
        c: 'Claro.',
        d: 'Pedro fez a tarefa.',
        e: 'Onde está a tarefa?',
        correct: 'd'
    },
    {
        question: '5 - Qual das seguintes frases é uma proposição?',
        a: 'As estrelas brilham no céu.',
        b: 'Que dia chuvoso!',
        c: 'Sim, eu concordo.',
        d: 'Mariana comprou pão.',
        e: 'Onde está o pão?',
        correct: 'a'
    }       
]


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById("e_text")
const submitBtn = document.getElementById('submit')



let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData
    [currentQuiz];
    
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;


}

function getSelected(){
  

    let answer = undefined;

    answerEls.forEach((answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    }))
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl => {
        answerEl.checked = false;
    }))
}


submitBtn.addEventListener('click', () =>{
    const answer = getSelected();
        if(answer )
        {
            if(answer === quizData[currentQuiz].correct){
                score++;
            }
            currentQuiz++;
            if(currentQuiz < quizData.length){
            loadQuiz(); 
            }else{
           quiz.innerHTML = `<h2>Você acertou corretamente ${score}/${quizData.length} questões</h2> 
            <button onclick="location.reload()">Jogar Novamente</button>`
            }
       }
});