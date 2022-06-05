const quizz = {

    index: 1,
    score: 0,


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
        document.querySelector('.navSelector').classList.add('hide');
    },

    setQuizz: function(elm)
    {

                //*Element lié aux data
        if(document.querySelector('.nextBtn'))
        {
            document.querySelector('.nextBtn').remove();
        }

        const currentQuizz = data.allQuestions[elm];
        const currentQuestion = currentQuizz.questions;
        const currentAnswer = currentQuizz.answers[quizz.index];
        const answerQuizz = data.allAnswers[elm];


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
        const allBtn = document.querySelectorAll('answer');

        if (quizz.checkAnswer(userResp, correctResp)){
            currentBtn.classList.add('correct');
            quizz.correct();
//*On insere la documentation
            doContainer.classList.remove('hide');
            doContent.textContent = data.allAnswers[elm]['doc'][index];

            let nextBtn = document.createElement('Button');
            nextBtn.textContent = "Question suivante";
            nextBtn.classList.add('correct', 'nextBtn');
            document.querySelector('.documentation').appendChild(nextBtn);
            nextBtn.addEventListener("click", quizz.handleNextBtn);
            quizz.score++;
            document.querySelector('.score').textContent = "score:" + quizz.score + "/10";

        }
        else{
            currentBtn.classList.add('wrong');
            quizz.wrong();
            //*On insere la documentation
            doContainer.classList.remove('hide');
            doContent.textContent = data.allAnswers[elm]['doc'][index];

            let nextBtn = document.createElement('Button');
            nextBtn.textContent = "Question suivante";
            nextBtn.classList.add('correct', 'nextBtn');
            document.querySelector('.documentation').appendChild(nextBtn);
            nextBtn.addEventListener("click", quizz.handleNextBtn);
            document.querySelector('.score').textContent = "score:" + quizz.score + "/10";

        };
    },

    correct: function(){
        quizz.removeAnswerEventListener();
    },

    wrong: function(){
        const allBtn = document.querySelector('.answer');
        quizz.removeAnswerEventListener();





    },
 
    handleNextBtn: function(evt){
        evt.preventDefault();
        quizz.index ++;

        let elm = document.querySelector('.quizz').getAttribute('quizzselector');


        if(quizz.index <= 10){ 
            quizz.nextQuestion();
            quizz.addAnswerEventListener();
            quizz.setQuizz(elm);
            return
        }
        else{
            document.querySelector('main').classList.add('hide');
            document.querySelector('.navSelector').classList.remove('hide');
            document.querySelector('.nav__list').classList.remove('hide');
            quizz.alertDisplay();
            quizz.index = 1;
            quizz.score = 0;

            quizz.quizzInit();
            
        }
    },

    nextQuestion: function(){
        let answerclass = document.querySelectorAll('.answer button');
        for (const iterator of answerclass) {
            iterator.classList.remove('correct');
            iterator.classList.remove('wrong');
        }
        document.querySelector('.documentation').classList.add('hide');

    },

    removeAnswerEventListener: function(){
        const btnQuizz = document.querySelectorAll('.quizz button');
        for (const btn of btnQuizz) {
            btn.removeEventListener("click", quizz.handleAnswerBtn);            
        }
    },

    alertDisplay: function(){
        if(quizz.score < 5){
            alert("Ne lachez rien à force de traveiller on fini par y arriver!!");
            return
        }
        if ( quizz.score >= 5 && quizz.score <= 7){
            alert("Encore juste un effort et c'est tout bon!!");
            return
        }
        if(quizz.score > 7){
            alert("Bravo c'est presque un sans fautes");
            return;
        }
    }




}