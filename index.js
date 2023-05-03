//bookmark toggle

const bookmark= document.querySelector('[data-js="bookmark"]');
const bookmarkFilled= document.querySelector('[data-js="bookmark-filled"]');


bookmark.addEventListener("click", () => {
    bookmark.toggleAttribute("hidden");
    bookmarkFilled.toggleAttribute("hidden");
});

bookmarkFilled.addEventListener("click", () => {
    bookmark.toggleAttribute("hidden");
    bookmarkFilled.toggleAttribute("hidden");
});


//answer toggle

const showAnswerButton = document.querySelector('[data-js="show-answer"]');
const answerToBeShown= document.querySelector('[data-js="answer-to-be-shown"]');

showAnswerButton.addEventListener("click", () => {
    answerToBeShown.toggleAttribute("hidden");
    showAnswerButton.textContent === "Show Answer" ? showAnswerButton.textContent= "Hide Answer" : showAnswerButton.textContent= "Show Answer";
});