
const portfolio = document.querySelector('.portfolio')
let timer

document.addEventListener('scroll',function z(){
    if(portfolio.getBoundingClientRect().y < 400){
        timer = setInterval(() => {
            let elem = document.createElement('div')
            elem.classList.add('custom-class')
            let color = `#${Math.round(Math.random()*10000)}`
            elem.style.backgroundColor = color
            let h3 = document.createElement('h3')
            h3.innerText = 'your custom title'
            let p = document.createElement('p')
            p.innerText = 'your custom text'
            elem.append(h3)
            elem.append(p)
            portfolio.append(elem)
        }, 1000);
        document.removeEventListener('scroll',z)
    }
  })

setTimeout(() => {
    clearInterval(timer)
}, 30000);