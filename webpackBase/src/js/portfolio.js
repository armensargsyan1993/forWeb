let top = document.querySelector('.portfolio-top')
let bottom = document.querySelector('.portfolio-bottom')



for(let i = 0; i < 100; i++){
    let random = '#'+Math.round(Math.random()*1000000)
    let div = document.createElement('div')
    div.style.width = '200px'
    div.style.height = '200px'
    div.style.backgroundColor = random
    top.append(div)
}

top.addEventListener('mouseenter',e => {
    
})