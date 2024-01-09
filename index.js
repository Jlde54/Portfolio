const headerNavHamMenuClose = document.querySelector('.header-nav-ham-menu-close')
const headerHam = document.querySelector('.header-ham')
const headerNavHamMenu = document.querySelector('.header-nav-ham-menu')
const headerNavHamClose = document.querySelector('.header-nav-ham-close')
const headerHamLink = document.querySelectorAll('.header-ham-link')

headerNavHamMenuClose.addEventListener('click', () => {
  headerHam.classList.toggle('header-ham-visible');
  headerNavHamMenu.classList.toggle('display-none');
  headerNavHamClose.classList.toggle('display-none');
})

headerHamLink.forEach(link => {
  link.addEventListener('click', () => {
    headerHam.classList.remove('header-ham-visible')
    headerNavHamMenu.classList.remove('display-none')
    headerNavHamClose.classList.add('display-none')
  })
})

const headerLogoName = document.querySelector('.header-logo-name')

headerLogoName.addEventListener('click', () => {
  location.href = '/'
})

