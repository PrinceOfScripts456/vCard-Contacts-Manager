
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

// Refer caller input
// <div id="phoneNum"> Number </div>
// <a onclick="optionChange(event, 'phoneNum')"> 0300-xyz </a>

function optionChange(event, displayId) {
    const el = event.target;
    const displayDiv = document.getElementById(displayId);

    displayDiv.innerText = el.innerText;
}