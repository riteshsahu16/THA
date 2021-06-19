
const squares = document.querySelectorAll('.square');
const booked = document.getElementById("book");
const remain = document.getElementById("remain");
booked.innerHTML = 0
remain.innerHTML = 100
let val = 0

remain.innerHTML = parseInt(remain.innerHTML) - parseInt(booked.innerHTML)
squares.forEach(element => {
    element.addEventListener("click",(e)=>{
        if(element.classList.contains('sq-color')){
            element.classList.remove('sq-color');
            val = parseInt(booked.innerHTML);
            booked.innerHTML = val - 1;
            

        }else{
            val = parseInt(booked.innerHTML);
            element.classList.add('sq-color');
            booked.innerHTML = val + 1;
        }
        remain.innerHTML = 100 - parseInt(booked.innerHTML);
    });
});

var student = {
    name: "Ritesh",
    intro: function(id){
        console.log(this.name + " " + id);
    }
}

var teacher = {
    name: "John",
    intro: function(id){
        console.log(this.name + " " + id);
    }
}

//Function Borrowing

student.intro.call(teacher, '101');

student.intro.apply(teacher,['102'])

//Bind : store a copy and re-use later

let introduce = student.intro.bind(teacher,'99')
introduce();






