
const linkButtons = document.querySelectorAll('.link-button');
const openPageWithButton = function () {
  const url = this.dataset.link
  window.open(url, '_self');
}

linkButtons.forEach(button => button.addEventListener('click', openPageWithButton, {once: true}));
