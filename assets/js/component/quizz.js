const quizz = {

    quizzInit: function(){
        quizz.addNavEventListener();
    },

    addNavEventListener: function(){
        const btnNav = document.querySelectorAll('.nav__list--item--btn');
        for (const btn of btnNav) {
            btn.addEventListener("click", quizz.handleNavBtn);            
        }
    },

    handleNavBtn: function(evt){
        evt.preventDefault();
        const elm = evt.currentTarget.textContent;
        console.log(elm);
        const currentQuizz = data.allQuestions[elm];
        const currentQuestion = currentQuizz.questions;

        let index = 1;
        console.log(currentQuestion[index]);
        let qBody = document.querySelector('.question');
        qBody.textContent = currentQuestion[index];
    }


}