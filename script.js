let share_box = document.querySelector('.share-box')
let share_button = document.querySelector('.share-icon')
let arrow_box = document.querySelector('.arrow')

let share_box_mobile = document.querySelector('.share-box-mobile')
let share_button_mobile = document.querySelector('.share-icon-mobile')

share_button.addEventListener('click', (e) => {
    e.preventDefault
    share_box.classList.toggle('hide')
    arrow_box.classList.toggle('hide')
})

share_button_mobile.addEventListener('click', (e) => {
    e.preventDefault
    share_box_mobile.classList.toggle('shows-up')
})