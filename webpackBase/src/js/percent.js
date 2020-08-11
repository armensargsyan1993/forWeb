const percentSpan = document.querySelectorAll('.percent')
const progress = document.querySelectorAll('.progress__value')
//percentSpan
let timerMs = 0
class Calc {
    constructor(percent,block){
        this.percent = percent
        this.block = block
    }
    *calculate(){
        for(let i = 0; i <= this.percent; i++){
                yield this.block.textContent = i
        }
    }
}



function compilePercent(ms) {
    const percent = [50,66,12,33]
    const calcArr = [...percentSpan].map((elem,i) => {
        return new Calc(percent[i],elem).calculate()
    })
    let inter = setInterval(() => {
        let next = 0
        for(let key of calcArr){
            next = key.next()
            if(next.value == Math.max(...percent)){
                clearInterval(inter)
            }
        }
    }, ms);
    progress.forEach((e,i) => {
        e.style.animation = `progress ${percent[i] * ms + (ms * 2.5)}ms forwards`
    })
}
// document.addEventListener('scroll',e => {
//     let val = window.scrollY
// })
// console.log(location.href);

