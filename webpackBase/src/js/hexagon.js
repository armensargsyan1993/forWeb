//not completed function ==> need realization if obj == null
function hexagon(obj){
    const block = document.querySelector(`.${obj.block}`)
    const hexagonArr = block.querySelectorAll('.hexagon')
    for(let key of hexagonArr){
        let hr = obj.href[0]
        obj.href[0] = obj.url + obj.href[0]
        key.insertAdjacentHTML('beforeend',`
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 252">
        <defs>
            <pattern id="${hr}" patternUnits="userSpaceOnUse" width="100%" height="100%">
            <image xlink:href=${obj.href[0]} />
            </pattern>
        </defs>
            <path fill="url(#${hr})" d="M75.173,251.959L0,126.152l74.827-126l150-0.193L300,125.766l-74.827,126L75.173,251.959z"/>
        </svg>
    `)
    obj.href.splice(0,1)
    }
}
const aboutInnerPhotos = {
    url:'./components/img/about/',
    block: 'about__inner_photos',
    href: ['1.png','2.png','3.png']
}

hexagon(aboutInnerPhotos)