
const question= document.querySelector('[data-js="question"]');
const answer= document.querySelector('[data-js="answer"]');
const charsQ= document.querySelector('[data-js="chars-q"]');
const charsA= document.querySelector('[data-js="chars-answer"]');


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
    <p class="p-answer" data-js="answer" hidden>${answer}</p>
    <div class="tags-container">
        <button class="btn btn-tag">${tag}</button>
        </div>
        `;
    e.target.reset();
    charsQ.textContent= null;
    charsA.textContent= null;
    main.append(newCard);
});


//character counter


function calculator(e){
    let length = e.target.value.length;
    return `${150 - length} characters left`
    }

question.addEventListener("input", (e) => {
    calculator(e);
    const charsP= calculator(e);
    charsQ.textContent= charsP;
});

answer.addEventListener("input", (e) => {
    calculator(e);
    const charsP= calculator(e);
    charsA.textContent= charsP;
});