const cards = document.querySelectorAll('.flip-card');

let cardSelected = [];
let cardsId = [];
let hasFlipped = false;
let firstCard, secondCard;
function flipCard(){
    this.classList.add('flip');
    cardSelected.push(this.getAttribute("data-name"));
    cardsId.push(this.getAttribute("data-id"));
    console.log(cardSelected);
    console.log(cardsId);

    if(cardSelected.length>2){
        this.classList.remove("flip");
    }

    if(cardSelected.length ==2){
        isSame();
    }

}


function isSame(){
    first = cards[cardsId[0]-1]
    second = cards[cardsId[1]-1]

    if(cardsId[0] == cardsId[1]){
        //clicked on same card
        cardSelected.pop();
        cardsId.pop();
        console.log(cardSelected);
        console.log("checking if same");
    }
    if(cardSelected[0] == cardSelected[1]){
        //Two different cards
        first.classList.add('hide');
        second.classList.add('hide');
        
        cardSelected = [];
        cardsId = [];
        console.log(cardSelected)
        
    }
    else{
        setTimeout(() => {
            first.classList.remove('flip')
            second.classList.remove('flip')
        }, 800);
        
        
        cardSelected = [];
        cardsId = [];
       
    }
}

cards.forEach(element => {
    element.addEventListener('click', flipCard)
});

document.getElementById("reset").addEventListener('click', ()=> {
    location.reload();
})