const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksAdd = document.getElementById('tasks__add');

tasksAdd.addEventListener('click', (event) => {
    event.preventDefault();
    if (taskInput.value !== '') { mewTask(); }
});

taskInput.addEventListener('keyup', (event) => {
    event.preventDefault();
    console.log(event.key);
    if (event.key === 'Enter' && taskInput.value !== '') {
        mewTask();
    }
})

function mewTask() {
    console.log(tasksList);
    tasksList.innerHTML += `
      <div class="task">
        <div class="task__title">
          ${taskInput.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`;
    taskInput.value = '';

    const taskRemove = Array.from(document.querySelectorAll('.task__remove'));
    taskRemove.forEach(element => {
        element.addEventListener('click', (event) => {
            event.target.parentElement.remove();
        })
    })
}