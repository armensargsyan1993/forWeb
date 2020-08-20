
let btn = document.querySelector('.modal-open')
let modalBlockContainer = document.querySelector('.modal-block-container')
let cont = document.querySelector('.container')
let close = document.querySelector('.close')
let modal = document.querySelector('.my-modal')
let bool = true


btn.addEventListener('click',(e)=>{
    bool = true
    toggle()
    bool = false
    document.addEventListener('keydown',toggle)
    close.addEventListener('click',toggle)
    
})

function toggle(){
    if(event.target.classList.value == 'close' || event.code == 'Escape'){
        document.removeEventListener('keydown',toggle)
        close.removeEventListener('click',toggle)
    }

    if(bool || event.code == 'Escape' || event.target.classList.value == 'close'){
        cont.classList.toggle('padding')
        modal.classList.toggle('mmo')
        modalBlockContainer.classList.toggle('modal-block')
        document.body.classList.toggle('hidden');
    }   
}





/* let btn = document.querySelector('.modal-open')
let modalBlockContainer = document.querySelector('.modal-block-container')
let cont = document.querySelector('.container')
let close = document.querySelector('.close')
let modal = document.querySelector('.my-modal')
let bool = false
btn.addEventListener('click',()=>{
    toggle()
    bool = !bool
})
document.addEventListener('keydown',e => {
    if(e.code === 'Escape' && bool){
        toggle()
    }
    bool = false
})
close.addEventListener('click',e => {
    toggle()
    bool = false
})


function toggle(){
    cont.classList.toggle('padding')
    modal.classList.toggle('mmo')
    modalBlockContainer.classList.toggle('modal-block')
    document.documentElement.classList.toggle('hidden');
} */