let link = document.querySelectorAll('.header-nav__link')
let nav = document.querySelector('.nav ul')

function handleButtonClick(section) {
        section.scrollIntoView({block: "center", behavior: "smooth"})
  }

 nav.addEventListener('click', (e) => {
     if(!e.target.parentNode.classList.contains('header-nav__link')){
         return
     }
     e.preventDefault()
     let section = document.querySelector(`.${e.target.innerText.toLowerCase()}`)
     if(section){
         handleButtonClick(section)
     }
 });

