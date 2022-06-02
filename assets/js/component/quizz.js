const quizz = {

    index: 1,



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
        document.querySelector('main').classList.toggle('hide');
        const elm = evt.currentTarget.textContent;
        quizz.setQuizz(elm);
        document.querySelector('.quizz').setAttribute('quizzSelector', elm);
        document.querySelector('.quizz').classList.add(elm);
        document.querySelector('.nav__list').classList.add('hide');
    },

    setQuizz: function(elm)
    {
        console.log(quizz.index);
                //*Element lié aux data
        const currentQuizz = data.allQuestions[elm];
        const currentQuestion = currentQuizz.questions;
        const currentAnswer = currentQuizz.answers[quizz.index];
        console.log(currentAnswer);
        const answerQuizz = data.allAnswers[elm];

        //let index = 1;
        document.querySelector('.quizz').setAttribute('questionSelector', quizz.index);
        let qBody = document.querySelector('.question');
        qBody.textContent = currentQuestion[quizz.index];

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


    checkAnswer: function(userResp, correctResp){
        if(correctResp == userResp)
        {

            return true;
        }
        return false;
    },


    handleAnswerBtn: function(evt){
        evt.preventDefault();
        let currentBtn = evt.currentTarget;
        let userResp = currentBtn.value;
// Partie doc
        let doContainer = document.querySelector('.documentation');
        let doContent = document.querySelector('.documentation--content');


        let elm = document.querySelector('.quizz').getAttribute('quizzselector');
        let index = document.querySelector('.quizz').getAttribute('questionselector');
        correctResp = data.allAnswers[elm]['reponse'][index];
        if (quizz.checkAnswer(userResp, correctResp)){
            currentBtn.classList.add('correct');
            quizz.correct();
//*On insere la documentation
            doContainer.classList.remove('hide');
            doContent.textContent = data.allAnswers[elm]['doc'][index];

            let nextBtn = document.createElement('Button');
            nextBtn.textContent = "Question suivante";
            nextBtn.classList.add('correct');
            document.querySelector('.quizz').append(nextBtn);
            nextBtn.addEventListener("click", quizz.handleNextBtn);

        }
        else{
            currentBtn.classList.add('wrong');
            quizz.wrong()
        };
    },

    correct: function(){
        alert("Bonne réponse");
    },

    wrong: function(){
        alert('mauvaise réponse');
    },
 
    handleNextBtn: function(evt){
        evt.preventDefault();
        quizz.index ++;
        let elm = document.querySelector('.quizz').getAttribute('quizzselector');
        console.log(elm);
        quizz.nextQuestion();
        quizz.setQuizz(elm);

    },

    nextQuestion: function(){
        let answerclass = document.querySelectorAll('.answer button');
        console.log(answerclass);
        for (const iterator of answerclass) {
            iterator.classList.remove('correct')
            
        }


    }



}