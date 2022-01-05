
  
  let counter = 0;
  
  let button = document.querySelector('.button');
  let count = document.querySelector('.count');
  
  button.addEventListener('click', function () {
    counter+=1;
    count.textContent = "Ты нажал: " + counter + " раз)";
  }); 