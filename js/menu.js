;(() => {
  const refs = {
    lists: document.querySelectorAll('[data-show-list]'),
    links: document.querySelectorAll('[data-toggle-list]'),
  }
  console.log(refs.links)
  refs.links.forEach((link) => {
    link.addEventListener('click', (e) => {
      if (e.target.nextElementSibling.dataset.showList === '') {
        toggleList(e.target.nextElementSibling)
      }
    })
  })
  function toggleList(list) {
    list.classList.toggle('is-hidden')
  }
})()