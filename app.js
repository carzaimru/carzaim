const hiddenForm = 'hidden-form';
const getHiddenForm = document.getElementById(hiddenForm);
const closeArea = 'close-area';
const getCloseArea = document.getElementById(closeArea);
const showForm = 'show-form';
const headerBtn = 'header-button';
const getHeaderBtn = document.getElementById(headerBtn);
const reflink = document.getElementsByClassName('refferer');

window.onload = () => {
    getHeaderBtn.addEventListener('click', () => {
        getHiddenForm.classList.add(showForm);console.log('hi3');
    });
    getCloseArea.addEventListener('click', () => {
        getHiddenForm.classList.remove(showForm);console.log('hi3');
    });
    for (var i = 0; i < reflink.length; i++) {
        reflink[i].value = document.referrer;
    }
}