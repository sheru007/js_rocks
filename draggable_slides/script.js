const container = document.querySelector('.container')
const cards = document.querySelector('.cards')

// keeps user mouse upa nd down
let isPressedDown = false;

// x horizontal space of mouse from inner container
let cursorXspace;

container.addEventListener('mousedown', (e) => {
    isPressedDown = true;
    cursorXspace = e.offsetX - cards.offsetLeft;
    container.style.cursor = 'grabbing'
})

container.addEventListener('mousemove', (e) => {
    if(!isPressedDown) return;
    e.preventDefault()
    cards.style.left = `${e.offsetX - cursorXspace}px`;
    boundCards()
})

container.addEventListener('mouseup', (e) => {
    container.style.cursor = "grab"
})

function boundCards(){
    const container_Rect = container.getBoundingClientRect()
    const cards_Rect = cards.getBoundingClientRect()
    
    if(parseInt(cards.style.left) > 0){
        cards.style.left = 0
    } else if(cards_Rect.right < container_Rect.right){
        cards.style.left = `-${cards_Rect.width - container_Rect.width}px`
    }

}
window.addEventListener('mouseup', (e) => {
    isPressedDown = false;
})


