// make a new question card

const form= document.querySelector('[data-js="form"]');
const main= document.querySelector('[data-js="main"]');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const question= e.target.elements.question.value;
    const answer= e.target.elements.answer.value;
    const tag= e.target.elements.tag.value;

    const newCard= document.createElement("section");
    newCard.classList.add("q-container")
    newCard.innerHTML=`
    <img class="bookmark" src="./assets/bookmark.png" data-js="bookmark" alt="bookmark">
    <img class="bookmark" src="./assets//bookmark_filled.png" data-js="bookmark-filled" alt="bookmark" hidden>
    <h2>${question}</h2>
    <button class="btn btn-answer-show" data-js="show-answer">Show Answer</button>
    <p class="p-answer" data-js="answer-to-be-shown" hidden>${answer}</p>
    <div class="tags-container">
        <button class="btn btn-tag">${tag}</button>
        </div>
        `;
    e.target.reset();
    charsQ.textContent= "";
    charsA.textContent= "";
    main.append(newCard);


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

});


//character counter

const question= document.querySelector('[data-js="question"]');
const answer= document.querySelector('[data-js="answer"]');
const charsQ= document.querySelector('[data-js="chars-q"]');
const charsA= document.querySelector('[data-js="chars-answer"]');

function calculator(e){
    let length = e.target.value.length;
    return `${150 - length} characters left`;
};

question.addEventListener("input", (e) => {
    calculator(e);
    charsQ.textContent= calculator(e);
});

answer.addEventListener("input", (e) => {
    calculator(e);
    charsA.textContent= calculator(e);
});