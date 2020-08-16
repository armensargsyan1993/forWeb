
let btn = document.querySelector('.modal-open')
let modalBlockContainer = document.querySelector('.modal-block-container')
let cont = document.querySelector('.container')
let close = document.querySelector('.close')
let modal = document.querySelector('.my-modal')

btn.addEventListener('click',(e)=>{
    let bool = true
    toggle(bool)
    bool = false
    document.addEventListener('keydown',help(),{once:true})
    close.addEventListener('click',help(),{once:true})
})

function toggle(bool){
    if(event.target.classList.value == 'close'){
        document.removeEventListener('keydown',toggle,{once:true})
    }
    if(event.code = 'Escape'){
        close.removeEventListener('click',toggle,{once:true})
    }
    if(bool || event.code === 'Escape' || event.target.classList.value == 'close'){
        cont.classList.toggle('padding')
        modal.classList.toggle('mmo')
        modalBlockContainer.classList.toggle('modal-block')
        document.body.classList.toggle('hidden');
    }
}


function help() {
    return toggle
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