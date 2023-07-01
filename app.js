const quizData = [{
    "question": "Which of the following is a client site language?",
    "a": "Java",
    "b": "C",
    "c": "Python",
    "d": "JavaScript",
    "correct": "d",
},
{
    "question": "What does HTML stand for?",
    "a": "Hypertext Markup Language",
    "b": "Cascading Style Sheet",
    "c": "Jason Object Notation",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "a",
},
{
    "question": "What year was JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "none of the above",
    "correct": "b",
},
{
    "question": "What does CSS stands for?",
    "a": "Hypertext Markup Language",
    "b": "Cascading Style Sheet",
    "c": "Jason Object Notation",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "b",
},
{
    "question": "Where in an HTML document is the correct place to refer to an external style sheet?",
    "a": "In the <head> section",
    "b": "In the <body> section",
    "c": "At the end of the document",
    "d": "All of above",
    "correct": "a",
}
];

let index = 0;
let total = quizData.length;
let correct = 0;
let wrong = 0;
const quesBox = document.getElementById('quesBox')
const allInputs = document.querySelectorAll('.input')

const loadQuestion = () => {

    if(index == total) {
        endQuiz();
    }

    const data = quizData[index]
    quesBox.innerText = `${ index + 1 } ${ data.question }`
    reset();
    allInputs[0].nextElementSibling.innerText = data.a;
    allInputs[1].nextElementSibling.innerText = data.b;
    allInputs[2].nextElementSibling.innerText = data.c;
    allInputs[3].nextElementSibling.innerText = data.d;
}

const submit = () => {
    const data = quizData[index]
    const ans = getAnswer()

    if(ans == data.correct){
        correct++
    }else{
        wrong++
    }

    index++
    loadQuestion()

    return;
}


const getAnswer = () => {
    let answer;
    allInputs.forEach( (input) => {
        if(input.checked){
            answer = input.value
        }
    })

    return answer;
}

const reset = () => {
    allInputs.forEach( (input) => {
         input.checked = false;
    })
}

const endQuiz = () => {
    document.querySelector('.container').innerHTML = `
    <div style ="text-align : center">
    <h2 style ="margin-bottom : 25px"> Thankyou for playing quiz </h2>
    <h2> Hii, you've scored ${correct} / ${total} </h2>
    </div>`
    
}

loadQuestion ();