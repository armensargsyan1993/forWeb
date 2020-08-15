document.addEventListener('scroll',e => {
    let docHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
    let docClientHeight = document.documentElement.clientHeight
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
    if(docClientHeight + pageYOffset + 200 > docHeight){
      document.body.append(elem)
    }
  })