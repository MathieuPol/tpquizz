const quizz = {

    quizzInit: function(){
        quizz.addNavEventListener();
        quizz.addAnswerEventListener();
    },

    addNavEventListener: function(){
        const btnNav = document.querySelectorAll('.nav__list--item--btn');
        for (const btn of btnNav) {
            btn.addEventListener("click", quizz.handleNavBtn);            
        }
    },

    addAnswerEventListener: function(){
        const btnQuizz = document.querySelectorAll('.quizz button');
        console.log(btnQuizz);
        for (const btn of btnQuizz) {
            btn.addEventListener("click", quizz.handleAnswerBtn);            
        }
    },





    handleNavBtn: function(evt){
        evt.preventDefault();
        const elm = evt.currentTarget.textContent;

        //*Element lié aux data
        const currentQuizz = data.allQuestions[elm];
        const currentQuestion = currentQuizz.questions;
        const currentAnswer = currentQuizz.answers;

        const answerQuizz = data.allAnswers[elm];


        let index = 1;
        console.log(currentQuestion[index]);
        console.log(currentAnswer);
        let qBody = document.querySelector('.question');
        qBody.textContent = currentQuestion[index];

        let answers = document.querySelectorAll('.answer');
        let i = 1;

        let repA = document.querySelector('#answerA p');
        repA.textContent = currentAnswer[1];
        let btnA = document.querySelector('#answerA button');
        btnA.setAttribute("value", 1)

        let repB = document.querySelector('#answerB p');
        repB.textContent = currentAnswer[2];
        let btnB = document.querySelector('#answerB button');
        btnB.setAttribute("value", 2)

        let repC = document.querySelector('#answerC p');
        repC.textContent = currentAnswer[3];
        let btnC = document.querySelector('#answerC button');
        btnC.setAttribute("value", 3)

        let repD = document.querySelector('#answerD p');
        repD.textContent = currentAnswer[4];
        let btnD = document.querySelector('#answerD button');
        btnD.setAttribute("value", 4)



       // quizz.checkAnswer(elm, index, resp);
    },

    checkAnswer: function(elm, index, resp){
        if(data.allAnswers[elm][index]['reponse'] == resp)
        {
            console.log("vous avez la bonne réponse");
            return;
        }
        console.log("c'est faux");
    },


    handleAnswerBtn: function(evt){
        evt.preventDefault();
        let currentBtn = evt.currentTarget;
        console.log(currentBtn);


    }

















    
}