const todos = document.querySelectorAll('.todo')
const all_status = document.querySelectorAll('.status')
let draggableTodo = null

todos.forEach(todo => {
    // source element event handlers
    todo.addEventListener('dragstart', dragStart)
    todo.addEventListener('dragend', dragEnd)
})

function dragStart() {
    draggableTodo = this;
    setTimeout(() => {
        this.style.display = "none"
    }, 0)
}

function dragEnd() {
    draggableTodo = null;
    setTimeout(() => {
        this.style.display = "block"
    }, 0)
}

all_status.forEach(status => {

    // target element event handler
    status.addEventListener('dragover', dragOver)
    status.addEventListener('dragenter', dragEnter)
    status.addEventListener('dragleave', dragLeave)
    status.addEventListener('drop', dragDrop)
})

function dragOver(e) {
    e.preventDefault()
}

function dragEnter() {
    this.style.border = "1px dashed #ccc"
}

function dragLeave() {
    this.style.border = "none";
}

function dragDrop() {
    this.style.border = "none";
    this.appendChild(draggableTodo)
    console.log("dropped")
}


// modal
const btns = document.querySelectorAll('[data-target-modal]')
const closeBtns = document.querySelectorAll('.modal-btn')
const overlay = document.querySelector('#overlay');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector(btn.dataset.targetModal).classList.add('active')
        document.querySelector('#overlay').classList.add('active')
        document.getElementById('todo_input').focus()
    })
})

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector(btn.dataset.targetModal).classList.remove('active')
        // btn.closest('.modal').classList.remove('active')
        overlay.classList.remove('active')
    })
})

window.onclick = (e) => {
    if (e.target == overlay) {
        const models = document.querySelectorAll('.modal')
        models.forEach(modal => modal.classList.remove('active'))
        overlay.classList.remove('active')
    }
}

// create todo
const submitBtn = document.getElementById('todo_submit')
submitBtn.addEventListener('click', createTodo)
const inputElement = document.getElementById('todo_input');

function createTodo() {
    const inputValue = inputElement.value;
    if (!inputValue) return;

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    todoDiv.setAttribute('draggable', 'true')

    const textNode = document.createTextNode(inputValue)
    todoDiv.appendChild(textNode)

    const closeSpan = document.createElement('span')
    closeSpan.innerHTML = "&times;"
    closeSpan.classList.add('close')

    // attach delete todo event listener
    closeSpan.addEventListener('click', () => {
        closeSpan.parentElement.remove()
    })

    todoDiv.appendChild(closeSpan)

    // attach drag and drop event lishtener
    todoDiv.addEventListener('dragstart', dragStart)
    todoDiv.addEventListener('dragend', dragEnd)

    no_status.appendChild(todoDiv)
    // console.log(todoDiv)

    // close the modal after submit btn clicked
    todo_form.classList.remove('active')
    overlay.classList.remove('active')

    // clear the input box after submit btn clicked
    inputElement.value = ''
}

// Execute a function when the user releases a key on the keyboard
inputElement.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.which === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        submitBtn.click();
    }
});


// delete todo

const deleteTodoBtns = document.querySelectorAll('.close')
deleteTodoBtns.forEach( btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.remove()
    })
})