function hexagon(){
    let hexagon = document.querySelector('.hexagon')
    hexagon.innerHTML = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 252">
        <defs>
            <pattern id="img" patternUnits="userSpaceOnUse" width="100%" height="100%">
            <image xlink:href="./components/img/about/1@1X.png" />
            </pattern>
        </defs>
            <path fill="url(#img)" d="M75.173,251.959L0,126.152l74.827-126l150-0.193L300,125.766l-74.827,126L75.173,251.959z"/>
        </svg>
    `
}