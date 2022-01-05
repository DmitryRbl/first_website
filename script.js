let start = true;
let counter = 0;

let button = document.querySelector('.button');
let count = document.querySelector('.count');
let cardTitle = document.querySelector('.card-title');

button.addEventListener('click', function () {
if (start) {
    counter+=1;
    count.textContent = "Ты нажал: " + counter + " раз)";
}
}); 

smoothly(cardTitle, 'textContent', 'Привет');
smoothly(cardTitle, 'textContent', 'Если хочешь увидеть что я для тебя подготовил');
smoothly(cardTitle, 'textContent', 'Нажми на меня!');

// window.addEventListener('transitionend',function(e){ //Smooth dispatches the 'sm_all_rendered' event when every item has been rendered
//     start = !start;
//     console.log(e);
//   });



 