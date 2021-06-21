const todos = document.querySelectorAll('.todo')
const togglers = document.querySelectorAll('.toggler')

todos.forEach(todo => {
    todo.addEventListener('click', () => {
        todo.classList.toggle('active')
    })
})

togglers.forEach(todo => {
    todo.addEventListener('click', () => {
        todo.classList.toggle('active')
        todo.nextElementSibling.classList.toggle('active')
    })
})

