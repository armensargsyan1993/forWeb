let link = document.querySelectorAll('.header-nav__link')
let nav = document.querySelector('.nav ul')
let ab = document.querySelector('.about')

function handleButtonClick() {
        ab.scrollIntoView({block: "center", behavior: "smooth"})
  }

 nav.addEventListener('click', (e) => {
     
     if(!e.target.parentNode.classList.contains('header-nav__link')){
         return
     }
     let section = document.querySelector(`.${e.target.innerText.toLowerCase()}`)
     console.log(section);
    //  if(section){
    //      handleButtonClick()
    //  }
 });

//  document.addEventListener('scroll',e => {
//     let docHeight = document.documentElement.getBoundingClientRect().height
//     let docClientHeight = document.documentElement.clientHeight
//     let scrollPos = pageYOffset
//     let elem = document.createElement('h1')
//     elem.innerText = 'AAAAAAAAAAAAAAAAAAAAAAAAAA'
//     if(docClientHeight + scrollPos + 200 > docHeight){
//       document.body.append(elem)
//     }
//     if(pageYOffset > 2000){
//       document.body.setAttribute('data-my','another')
//       document.body.classList.add('arrow')
//     }
//   })