
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const h1 = document.querySelector('h1')

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
      h1.innerHTML = "GREY";

    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
      h1.innerHTML = "WHITE";
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
      h1.innerHTML = "BLUE";
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
      h1.innerHTML = "YELLOW";
    }
    
  });
});

