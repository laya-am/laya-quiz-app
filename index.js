//bookmark toggle

const bookmark= document.querySelector('[data-js="bookmark"]');
const bookmarkFilled= document.querySelector('[data-js="bookmark-filled"]');


bookmark.addEventListener("click", () => {
    bookmark.hasAttribute("hidden") ? bookmark.removeAttribute("hidden") : bookmark.setAttribute("hidden","");
    bookmarkFilled.hasAttribute("hidden") ? bookmarkFilled.removeAttribute("hidden") : bookmarkFilled.setAttribute("hidden","");
});

bookmarkFilled.addEventListener("click", () => {
    bookmark.hasAttribute("hidden") ? bookmark.removeAttribute("hidden") : bookmark.setAttribute("hidden","");
    bookmarkFilled.hasAttribute("hidden") ? bookmarkFilled.removeAttribute("hidden") : bookmarkFilled.setAttribute("hidden","");
});


//answer toggle

const showAnswerButton = document.querySelector('[data-js="show-answer"]');
const answer= document.querySelector('[data-js="answer"]');

showAnswerButton.addEventListener("click", () => {
    answer.hasAttribute("hidden") ? answer.removeAttribute("hidden") : answer.setAttribute("hidden","");
    showAnswerButton.textContent === "Show Answer" ? showAnswerButton.textContent= "Hide Answer" : showAnswerButton.textContent= "Show Answer"
})