import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Use BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.querySelector('.carousel-control-next').addEventListener('click', () => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].classList.add('active');
});

document.querySelector('.carousel-control-prev').addEventListener('click', () => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    items[currentIndex].classList.add('active');
});

document.addEventListener('DOMContentLoaded', function () {
  const navMenuIcon = document.getElementById('navMenuIcon');
  const navMenu = document.getElementById('navMenu');

  navMenuIcon.addEventListener('click', function () {
      navMenu.classList.toggle('active');
  });
});




