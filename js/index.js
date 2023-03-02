const elementDom = {
  burger: document.querySelector('.header__burger'),
  header: document.querySelector('.header'),
}
const state = {
  openBurger: false,
}

const renderingMenu = () => {
  state.openBurger ? elementDom.header.classList.add('header-onClick'): elementDom.header.classList.remove('header-onClick');
}

const init = () => {
  elementDom.burger.addEventListener('click', () => {
    state.openBurger = !state.openBurger;
    renderingMenu();
  })

}

init();
