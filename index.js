class Question {
    constructor(question, answer, fluff) {
        this.question = Question.count + ". " + question;
        this.answer = answer;
        this.fluff = fluff;
    }
}

Question.count = 1;
Question.correct = false;
Question.correctCount = 0;

let container = document.getElementById('formID');
let question = document.getElementById('question');
let button = document.getElementById('next');

var questionOne = {
    question: "What is HTML",
    answer: "Hyper Text Markup Language",
    fluff: ["Hyper Text Markup Language", "Hyper Text Markdown Language", "Hyper Text Markleft Language", "Hyper Text Markright Language"]
}

var questionTwo = {
    question: "What is CSS",
    answer: "Cascading Stylesheets",
    fluff: ["Cascading Style Script", "Cascading Style Stuff", "Cascading Stylesheets", "Cascading Something Something"]
}

var questionThree = {
    question: "What is JS",
    answer: "JavaScript",
    fluff: ["JeanieScript", "JoshScript", "JScript", "JavaScript"]
}

var questionArray = [questionOne, questionTwo, questionThree];

button.addEventListener('click', () => {
    if (Question.count == questionArray.length + 1) {
        question.innerHTML = "The End!";
        container.innerHTML = "Thanks for playing! You got " + Question.correctCount + " right!";
    } else {
        container.innerHTML = "";
        button.innerHTML = "Next";
        newQuestion(questionArray[Question.count - 1]);

    }
    
    Question.correct = false;
    Question.count++;
});

function newQuestion(data) {
    for (let i = 0; i < 4; i++) {
        let newDiv = document.createElement('div');
        
        var q1 = new Question(data.question, data.answer, data.fluff);
        
        question.innerHTML = q1.question;
    
        newDiv.innerHTML += "<input type='checkbox' id='check" + i + "'>";
        newDiv.innerHTML += "<p id='content" + i + "'>" + q1.fluff[i] + "</p>";
        newDiv.setAttribute('id', 'answer');
        newDiv.addEventListener('click', () => {
    
            let check = document.getElementById('check' + i);
            for (let a = 0; a < 4; a++) {
                document.getElementById('check' + a).checked = false;
            }
            check.checked = true;
    
            let answer = document.getElementById('content' + i).innerHTML;  
            if (answer == q1.answer) {
                Question.correct = true;
                Question.correctCount++;
            }
        });
    
        container.append(newDiv);
        
    }
}