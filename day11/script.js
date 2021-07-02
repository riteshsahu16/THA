QUESTIONS = [
    {
        "name": " India's largest city by population",
        "option1": "Delhi",
        "option2": "Mumbai",
        "option3": "Pune",
        "option4": "Bangalore",
        "answer": 2,
        "money": 1000
    },
    {
        "name": "India is a federal union comprising twenty-nine states and how many union territories?",
        "option1": "6",
        "option2": "7",
        "option3": "8",
        "option4": "9",
        "answer": 2,
        "money": 2000
    },
    {
        "name": "What are the major languages spoken in Andhra Pradesh?",
        "option1": " English and Telugu",
        "option2": "Telugu and Urdu",
        "option3": "Telugu and Kannada",
        "option4": "All of the above languages",
        "answer": 2,
        "money": 3000
    },
    {

        "name": "What is the state flower of Haryana?",
        "option1": "Lotus",
        "option2": "Rhododendron",
        "option3": "Golden Shower",
        "option4": "Not declared",
        "answer": 2,
        "money": 5000
    },
    {

        "name": " Where was the International Conference on 'Yoga for Diabetes' organized from January 4-6, 2017?",
        "option1": "New Delhi ",
        "option2": "Jharkhand",
        "option3": "Jammu and Kashmir",
        "option4": "Haryana",
        "answer": 1,
        "money": 10000
    },
    {


        "name": "Name the tower which was lighted up in Tricolour of India on Republic Day, 2017?",
        "option1": "WTC Towers",
        "option2": "Jeddah Tower",
        "option3": "Burj Khalifa",
        "option4": "Burj Al Arab",
        "answer": 3,
        "money": 20000
    },
    {

        "name": "Which of the following states is not located in the North?",
        "option1": "Himachal Pradesh",
        "option2": "Jharkhand",
        "option3": "Jammu and Kashmir",
        "option4": "Haryana",
        "answer": 2,
        "money": 40000
    },
    {
        "name": "In what state is the Elephant Falls located?",
        "option1": "Meghalaya",
        "option2": "Mizoram",
        "option3": "Orissa",
        "option4": "Manipur",
        "answer": 2,
        "money": 80000
    },
    {
        "name": "Which state has the largest population?",
        "option1": "Maharastra",
        "option2": "Uttar Pradesh",
        "option3": "Bihar",
        "option4": "Andra Pradesh",
        "answer": 2,
        "money": 160000
    },
    {
        "name": " Which state has the largest area?",
        "option1": "Maharashtra",
        "option2": "Rajasthan",
        "option3": "Bihar",
        "option4": "Andra Pradesh",
        "answer": 2,
        "money": 320000
    },
    {
        "name": "Which is the largest coffee producing state of India?",
        "option1": "Maharastra",
        "option2": "Karnataka",
        "option3": "Maharashtra",
        "option4": "Rajasthan",
        "answer": 2,
        "money": 640000
    },
    {
        "name": "In which state is the main language Khasi?",
        "option1": "Nagaland",
        "option2": "Rajasthan",
        "option3": "Maharashtra",
        "option4": "Meghalaya",
        "answer": 4,
        "money": 1250000
    },
    {

        "name": "Which of the following created history in 2016 by winning all three gold medals on offer in the 1st Western Asia Youth Chess Championship?",
        "option1": "Nihal Sarin",
        "option2": "Kush Bhagat",
        "option3": "Praggnanandhaa",
        "option4": "Vidit Gujrathi",
        "answer": 2,
        "money": 2500000
    },
    {


        "name": " Which Bollywood actress is the new ambassador for Swachh Bharat Mission's youth-based 'Swachh Saathi' programme?",
        "option1": "Vidya Balan ",
        "option2": "Dia Mirza ",
        "option3": "Priyanka Chopra",
        "option4": "Sonakshi Sinha",
        "answer": 2,
        "money": 5000000
    },
    {
        "name": "When is the Indian Air Force Day celebrated?",
        "option1": "October 9",
        "option2": "October 10",
        "option3": "October 8",
        "option4": "October 11",
        "answer": 3,
        "money": 10000000
    }

]

//console.log(QUESTIONS)
//console.log(this)
let s_no = 0
loadQuestion(s_no);

const options = document.querySelectorAll('.option')
const answer = QUESTIONS[s_no]['answer']
for (let index = 0; index < options.length; index++) {
    const element = options[index];
    //console.log(element)
    element.addEventListener('click', () => {
        if (index + 1 == answer) {
            element.classList.remove('default');
            element.classList.add('correct');
        }
        else {
            element.classList.remove('default');
            element.classList.add('incorrect');
        }
    })
};
//console.log(options);

//Load Question -> id
function loadQuestion(id) {
    document.getElementById('ques').innerText = QUESTIONS[id]['name'];
    document.getElementById('ques1').innerText = QUESTIONS[id]['option1'];
    document.getElementById('ques2').innerText = QUESTIONS[id]['option2'];
    document.getElementById('ques3').innerText = QUESTIONS[id]['option3'];
    document.getElementById('ques4').innerText = QUESTIONS[id]['option4'];
    //console.log(id)
    return id;
}

//validate
function validate(id, options) {
    console.log("id", id)
    
    const answer = QUESTIONS[id]['answer']
    console.log("answer", answer)
    for (let index = 0; index < options.length; index++) {
        console.log("index", index)
        const element = options[index];
        //console.log(element)
        element.addEventListener('click', () => {
            if (index + 1 == answer) {
                console.log("inside true case")
                element.classList.remove('default');
                element.classList.remove('incorrect');
                element.classList.add('correct');
                
            }
            else {
                element.classList.remove('default');
                element.classList.remove('correct');
                element.classList.add('incorrect');
                
            }
        })
    };
    //console.log(options);
}

const next = document.getElementById('next');
next.addEventListener('click', () => {
    console.clear()
    s_no++;
    const options = document.querySelectorAll('.option');
    options.forEach(element => {
        element.classList.remove('correct');
        element.classList.remove('incorrect');
        element.classList.add('default');
    });
    console.log("serial ", s_no)
    loadQuestion(s_no);
    console.log("Options ", options)
    validate(s_no, options);
})


