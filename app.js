const hiddenForm = 'hidden-form';
const getHiddenForm = document.getElementById(hiddenForm);
const closeArea = 'close-area';
const getCloseArea = document.getElementById(closeArea);
const showForm = 'show-form';
const headerBtn = 'header-button';
const getHeaderBtn = document.getElementById(headerBtn);
const reflink = document.getElementsByClassName('refferer');

window.onload = () => {
    // getHeaderBtn.addEventListener('click', () => {
    //     getHiddenForm.classList.add(showForm);console.log('hi3');
    // });
    // getCloseArea.addEventListener('click', () => {
    //     getHiddenForm.classList.remove(showForm);console.log('hi3');
    // });
    for (var i = 0; i < reflink.length; i++) {
        reflink[i].value = document.referrer;
    }
}

var startDate = new Date("2022-01-01 00:00");

function checkDate() {
    if (new Date() > startDate) return;
    var script = document.createElement('script');
    script.src = 'https://code.reffection.com/pixel/tags/d776381fe0390c8cc56839d7655ec9a55a429273';
    script.async = false;
    document.head.appendChild(script);
}

window.setTimeout(checkDate, 1000);