
const portfolio = document.querySelector('.portfolio')
let timer

document.addEventListener('scroll',function z(){
    if(portfolio.getBoundingClientRect().y < 400 && portfolio.getBoundingClientRect().y > 0){
        timer = setInterval(() => {

            let elem = document.createElement('div')
            let color = `#${Math.round(Math.random()*10000)}`
            elem.style.backgroundColor = color
            let h3 = document.createElement('h3')
            h3.innerText = 'your custom title'
            let p = document.createElement('p')
            p.innerText = 'your custom text'
            elem.append(h3)
            elem.append(p)
            portfolio.append(elem)
            elem.classList.add('custom-class')
            setTimeout(()=> {
                elem.classList.add('active')
            },20)
        }, 1000);
        document.removeEventListener('scroll',z)
    }
  })

setTimeout(() => {
    clearInterval(timer)
}, 30000);