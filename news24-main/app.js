const openAside = document.querySelector('.open-aside');
const closeAside = document.querySelector('.close-aside');
const aside = document.querySelector('.aside');

const openAsideBar = () => {
  aside.style.transform = "translateX(0)"
}
const closeAsideBar = () => {
  aside.style.transform = "translateX(100%)"
}

openAside.addEventListener('click', openAsideBar);
closeAside.addEventListener('click', closeAsideBar);