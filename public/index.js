// Open Link
const linkButtons = document.querySelectorAll('.link-button');
const openPageWithButton = function () {
  const url = this.dataset.link
  window.open(url, '_self');
}

linkButtons.forEach(button => button.addEventListener('click', openPageWithButton, {once: true}));

// Delete
const deleteButtons = document.querySelectorAll('.delete');

const openDialog = function () {
  const id = this.dataset.id;
  const deleteDialog = document.querySelector(`.delete-dialog[data-id="${id}"]`);
  deleteDialog.showModal();
}

deleteButtons.forEach(btn => {
  btn.addEventListener('click', openDialog);
})
