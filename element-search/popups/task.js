const popupMain = document.getElementById('modal_main');
const popupSuccess = document.getElementById('modal_success');
const successBtn = document.querySelector('.show-success');

popupMain.className += ' modal_active';

successBtn.onclick = () => {
    popupSuccess.className += ' modal_active';
    popupMain.className = 'modal';
};

const closePopup = Array.from(document.getElementsByClassName('modal__close modal__close_times'));

closePopup.forEach((el) => el.onclick = () => {
    popupMain.className = 'modal';
    popupSuccess.className = 'modal';
});