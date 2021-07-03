document.querySelector('.get-jokes').addEventListener('click', getJokes);
function getJokes(e){
    let number = document.querySelector('input[type=number]').value;
    if (number<1){
        alert('Enter value greater/equal to 1');
    }
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`,true);

    xhr.onload = function(){
        if(this.status === 200){
            let response = JSON.parse(this.responseText);
            
            let output = "";
            if(response.type == 'success'){
                response.value.forEach(joke => {
                    output += `<li>${joke.joke}</li>`
                });
            }else{
                output += "<h3> OOPS! Something Went Wrong!!! </h3>"
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();


    e.preventDefault();
}