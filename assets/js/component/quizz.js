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
        for (const btn of btnQuizz) {
            btn.addEventListener("click", quizz.handleAnswerBtn);            
        }
    },



    handleNavBtn: function(evt){
        evt.preventDefault();
        const elm = evt.currentTarget.textContent;
        quizz.setQuizz(elm);



    },

    setQuizz: function(elm)
    {
                //*Element lié aux data
        const currentQuizz = data.allQuestions[elm];
        const currentQuestion = currentQuizz.questions;
        const currentAnswer = currentQuizz.answers;

        const answerQuizz = data.allAnswers[elm];


        let index = 1;

        let qBody = document.querySelector('.question');
        qBody.textContent = currentQuestion[index];

        let answers = document.querySelectorAll('.answer');
        let i = 1;

        for (const iterator of answers) {
            let repA = iterator.querySelector('p');
            repA.textContent = currentAnswer[i];
            let btnA = iterator.querySelector('button');
            btnA.setAttribute("value", i);
            i++;

        }


//* Une fois les buttons créés on leurs assigne un eventlistener
    },


    checkAnswer: function(elm, index, userResp, correctResp){
        if(correctResp == userResp)
        {
            console.log("vous avez la bonne réponse");
            return;
        }
        console.log("c'est faux");
    },


    handleAnswerBtn: function(evt){
        evt.preventDefault();
        let currentBtn = evt.currentTarget;





        
    }

    
}