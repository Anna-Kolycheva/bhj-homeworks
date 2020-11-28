const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksAdd = document.getElementById('tasks__add');

tasksAdd.addEventListener('click', (event) => {
    event.preventDefault();
    if (taskInput.value !== '') { mewTask(); }
});

taskInput.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.key === 'Enter' && taskInput.value !== '') {
        mewTask();
    }
})

function mewTask() {
    tasksList.insertAdjacentHTML('beforeend',
        `<div class="task">
        <div class="task__title">
          ${taskInput.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`);
    taskInput.value = '';

    tasksList.lastChild.addEventListener('click', (event) => {
            event.target.parentElement.remove();
        })
}
