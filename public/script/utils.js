
function formatSize(bytes) {
    const MAX_SIZE = 1024 * 1024 * 100;// 100 MB
    let formattedSize = null;

    let size = ['B', 'KB', 'MB', 'GB', 'TB'];
    let len = bytes;
    let order = 0;

    while (len >= 1024 && order < 4) {
        len = (len / 1024.0).toFixed(2);
        ++order;
    }

    if (order < 4) {
        formattedSize = len + " " + size[order];
        return formattedSize;
    }
    else {
        console.error("number is too large");
    }
}


const AT = document.getElementById('AT');
const LT = document.getElementById('LT');
const DT = document.getElementById('DT');

AT.addEventListener('click', () => {
    setThemeviaCSSVariables();
});

LT.addEventListener('click', () => {
    setThemeviaCSSVariables('light');
});

DT.addEventListener('click', () => {
    setThemeviaCSSVariables('dark');
});


(() => {
    const theme = localStorage.getItem('theme');
    setThemeviaCSSVariables(theme);
})()


function setThemeviaCSSVariables(theme) {

    if (theme === 'dark') {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    }
    else if (theme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    }
    else {
        const preferedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setThemeviaCSSVariables(preferedTheme);
    }
}

// Refer caller input
// <div id="phoneNum"> Number </div>
// <a onclick="optionChange(event, 'phoneNum')"> 0300-xyz </a>

// function optionChange(event, displayId) {
//     const el = event.target;
//     const displayDiv = document.getElementById(displayId);

//     displayDiv.innerText = el.innerText;
// }