const form= document.querySelector('[data-js="form"]');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const question= e.target.elements.question.value;
    const answer= e.target.elements.answer.value;
    const tag= e.target.elements.tag.value;

    const newCard= document.createElement("section");
//     newCard.innerHTML=`
//     <img class="bookmark" src="./assets/bookmark.png" alt="bookmark">
//     <img class="bookmark bookmark-filled" src="./assets//bookmark_filled.png" alt="bookmark">
//     <h2>${question}</h2>
//     <div class="answer-container">
//         <button class="btn btn-answer-show">Show Answer</button>
//         <p class="p-answer">This is the answer!</p>
//     </div>
//     <div class="tags-container">
//         <button class="btn btn-tag">#HTML</button>
//         <button class="btn btn-tag">#CSS</button>
//         <button class="btn btn-tag">#flexbox</button>
//     </div>
//     `
// });