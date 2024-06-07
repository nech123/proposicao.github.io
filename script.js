const quizData = [
    {
        question: '1 - Qual a peça do computador é usada fazer a dissipação de calor do processador?',
        a: 'CPU fan',
        b: 'GPU fan',
        c: 'Fonte fan',
        d: 'HDD fan',
        e: 'nenhuma da anteriores',
        correct: 'a'
    },
    {
        question: '2 - Qual componente é considerado o cérebro do computador?',
        a: 'Placa mãe',
        b: 'Memória RAM',
        c: 'Processador (CPU)',
        d: 'Disco Rígido (HDD)',
        e: 'GPU',
        correct: 'c'
    },
    {
        question: '3 - Qual componente é responsável por renderizar gráficos em um computador?',
        a: 'Placa mãe',
        b: 'Memória RAM',
        c: 'Fonte de Alimentação',
        d: 'Placa de Vídeo (GPU)',
        e: 'Disco Rígido (HDD)',
        correct: 'd'
    },
    {
        question: '4 - O que é um SSD?',
        a: 'Um tipo de processador',
        b: 'Um tipo de memória de armazenamento',
        c: 'Um tipo de placa gráfica',
        d: 'Um tipo de placa mãe',
        e: 'Um tipo de monitor',
        correct: 'b'
    },
    {
        question: '5 - Qual a função da memória RAM em um computador?',
        a: 'Armazenar dados permanentemente',
        b: 'Processar instruções do usuário',
        c: 'Armazenar dados temporariamente para acesso rápido',
        d: 'Fornecer energia ao sistema',
        e: 'Conectar todos os componentes',
        correct: 'c'
    },
    {
        question: '6 - Qual componente do computador é responsável por fornecer energia elétrica?',
        a: 'Fonte de Alimentação (PSU)',
        b: 'Placa mãe',
        c: 'Processador (CPU)',
        d: 'Placa de Vídeo (GPU)',
        e: 'Memória RAM',
        correct: 'a'
    },
    {
        question: '7 - Qual dos seguintes componentes é usado para conectar e comunicar todos os outros componentes do computador?',
        a: 'Placa mãe',
        b: 'Processador (CPU)',
        c: 'Memória RAM',
        d: 'Placa de Vídeo (GPU)',
        e: 'Disco Rígido (HDD)',
        correct: 'a'
    },
    {
        question: '8 - Qual é a principal função do disco rígido (HDD) ou SSD?',
        a: 'Processar dados',
        b: 'Armazenar dados',
        c: 'Conectar dispositivos externos',
        d: 'Fornecer energia',
        e: 'Refrigerar o sistema',
        correct: 'b'
    },
    {
        question: '9 - Qual componente permite a comunicação sem fio em um computador?',
        a: 'Placa de som',
        b: 'Placa de rede (NIC)',
        c: 'Placa Wi-Fi',
        d: 'Placa de vídeo (GPU)',
        e: 'Placa mãe',
        correct: 'c'
    },
    {
        question: '10 - O que significa a sigla "BIOS"?',
        a: 'Basic Input Output System',
        b: 'Binary Input Output System',
        c: 'Basic Internal Output System',
        d: 'Binary Internal Output System',
        e: 'Basic Interactive Output System',
        correct: 'a'
    }
];


function showLaughingEmoji() {
    const overlay = document.getElementById('emoji-overlay');
    overlay.style.display = 'flex';

    // Adicionar o evento de clique para remover o emoji
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });



    // Adicionar o evento de clique para remover o emoji
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
}


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
            if(score < 5){
                showLaughingEmoji();
            }else{
                alert("Parabéns meu mano!")
            }
            }
       }
});