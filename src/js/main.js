import 'normalize.css'
import '../styles/main.scss'

const tabs = document.querySelectorAll('.tabs__btn')

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('tabs__btn--active'))
    tab.classList.add('tabs__btn--active')
  })
})

const article = document.querySelector('.article')
const more = document.querySelector('.article__more')

more.addEventListener('click', () => {
  const isOpen = article.classList.toggle('is-open')
  more.setAttribute('aria-expanded', String(isOpen))

  if (window.matchMedia('(max-width: 767px)').matches) {
    more.querySelector('span').textContent = isOpen ? 'Свернуть' : 'Читать далее'
  }
})
