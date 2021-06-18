
const squares = document.querySelectorAll('.square');

squares.forEach(element => {
    element.addEventListener('click', ()=> {
        element.classList.toggle('sq-color');
    })
});

