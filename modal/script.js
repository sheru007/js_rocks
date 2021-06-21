const btns = document.querySelectorAll('[data-target]')
const closeBtns = document.querySelectorAll('.modal-btn')
const overlay = document.querySelector('#overlay');

btns.forEach( btn => {
    btn.addEventListener('click', () => {
        document.querySelector(btn.dataset.target).classList.add('active')
        document.querySelector('#overlay').classList.add('active')
    })
})

closeBtns.forEach( btn => {
    btn.addEventListener('click', () => {
        // document.querySelector(btn.dataset.target).classList.remove('active')
        btn.closest('.modal').classList.remove('active')
        overlay.classList.remove('active')
    })
})

window.onclick = (e) => {
    if(e.target == overlay){
        const models = document.querySelectorAll('.modal')
        models.forEach( modal => modal.classList.remove('active'))
        overlay.classList.remove('active')
    }
}

