function Task(name){
    this.name = name;
}

function UI(){}
UI.prototype.addTask = function(task){
    const list = document.getElementById('task-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td class="task-name">${task.name}</td>
    <td><input type="checkbox" id="cbox" class="complete"></td>
    <td><a href="#" class="delete"> X </a> </td>
    `;
    list.appendChild(row);
    
   // console.log(row)
}

UI.prototype.deleteTask = function(target){
    if(target.className == 'delete'){
        target.parentElement.parentElement.remove();
    }
}

UI.prototype.clearFields = function(){
    document.getElementById('name').value = "";
}

UI.prototype.markCompleted = function(target){
    if(target.className == 'complete'){
        target.classList.add('completed');
        target.parentElement.parentElement.querySelector('.task-name').classList.add('completed');
        target.style.visibility = "hidden";
        
    }
}

const form = document.getElementById('task_form');
form.addEventListener('submit', function (e){
    let task_name = document.getElementById('name').value;
    const task = new Task(task_name);
    const ui = new UI();
    ui.addTask(task);
    ui.clearFields();
    e.preventDefault();
})


document.getElementById('task-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteTask(e.target);
    e.preventDefault();
})

document.getElementById('task-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.markCompleted(e.target);
    e.preventDefault();
})