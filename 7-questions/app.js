//using selectors inside the element
// traversing the dom

// traverse DOM method
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });

// using selectors 
const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
    // console.log(question);
    const btn = question.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click', function () {
        // iterate over the articles
        // if the article is not the same 
        // then remove the show-text class
        questions.forEach(function (q) {

            if (q !== question) {
                q.classList.remove('show-text');
            }
        })



        question.classList.toggle('show-text');
    });
});