export default function humburgerInit() {
  // По клику на гамбургер
  document.querySelector('.humburger').addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.toggle('disactive')
    document.querySelector('#open').classList.toggle('disactive')
    document.querySelector('#close').classList.toggle('disactive')
  })

  // По клику на любой пункт меню всё сворачиваем
  const mobileMenuHrefs = document.querySelectorAll('.mobile-menu a')
  mobileMenuHrefs.forEach((href) => {
    href.addEventListener('click', () => {
      document.querySelector('.mobile-menu').classList.toggle('disactive')
      document.querySelector('#open').classList.toggle('disactive')
      document.querySelector('#close').classList.toggle('disactive')
    })
  })
}
