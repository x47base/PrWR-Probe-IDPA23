document.addEventListener('DOMContentLoaded', (event) => {
    let navContainer = document.getElementById('nav-mobile')
    let navBtn = document.getElementById('mobile-nav-button')
    let navLinksContainer = document.getElementById('mobile-nav-links')
    let mainContainer = document.getElementById('main-container')
    let footerContainer = document.getElementById('footer-container')
    let active = false
    navBtn.addEventListener('click', () => {
        let m = 9776
        let x = 0x00D7

        if (active) {
            navBtn.innerText = String.fromCharCode(m)
            navLinksContainer.classList.add('nav__mobile__links__not__active')
            navLinksContainer.classList.remove('nav__mobile__links__active')
            navContainer.classList.remove('nav__mobile__active')
            mainContainer.classList.add('visible')
            mainContainer.classList.remove('hidden')
            mainContainer.classList.add('visible')
            footerContainer.classList.remove('hidden')
            active = false
        } else {
            navBtn.innerText = String.fromCharCode(x)
            navContainer.classList.add('nav__mobile__active')
            navLinksContainer.classList.remove('nav__mobile__links__not__active')
            navLinksContainer.classList.add('nav__mobile__links__active')
            mainContainer.classList.remove('flex')
            mainContainer.classList.add('hidden')
            mainContainer.classList.remove('visible')
            footerContainer.classList.add('hidden')
            active = true
        }
    })
})