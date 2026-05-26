
const fileInput = document.getElementById('vcfInFile');
const fileDrag = document.getElementById('vcfDragFile');
const uploadBtn = document.getElementById('uploadBtn');
const fileInfo = document.getElementById('fileInfo');
const fileName = document.getElementById('fileName');
const fileSize = document.getElementById('fileSize');
const statusText = document.getElementById('status');

let selectedFile = null;

// Select File
fileInput.addEventListener('change', () => {

    const file = fileInput.files[0];

    if(!file) {
        return console.error('unexpected error occured [code: 01]');
    }

    if(!file.name.toLowerCase().endsWith('.vcf')) {
        statusText.innerText = "❌ Please select a valid .vcf file";
        return;
    }

    if(file.size > 1024 * 1024 * 100) {
        statusText.innerText = "❌ Cannot upload file greater than 100 MB";
        return;
    }

    selectedFile = file;

    fileInfo.style.display = 'block';
    fileName.textContent = selectedFile.name;
    fileSize.textContent = formatSize(selectedFile.size);

    uploadBtn.innerText = "Upload File";
    uploadBtn.disabled = false;
    statusText.innerText = "";
});


fileDrag.addEventListener("dragover", (e) => {
    e.preventDefault();
});

fileDrag.addEventListener("drop", (e) => {
    e.preventDefault();

    let file = e.dataTransfer.files;

    if(!file) {
        return console.error('unexpected error occured [code: 02]');
    }

    if( file.length != '1' ) {
        statusText.innerText = "❌ Please drop only one file";
        return console.error('drop only one file, multiple files are not allowed.');
    }

    file = file[0];

    if(!file.name.toLowerCase().endsWith('.vcf')) {
        statusText.innerText = "❌ Please select a valid .vcf file";
        return;
    }

    if(file.size > 1024 * 1024 * 100) {
        statusText.innerText = "❌ Cannot upload file greater than 100 MB";
        return;
    }

    selectedFile = file;

    fileInfo.style.display = 'block';
    fileName.textContent = selectedFile.name;
    fileSize.textContent = formatSize(selectedFile.size);

    uploadBtn.innerText = "Upload File";
    uploadBtn.disabled = false;
    statusText.innerText = "";
});

// Upload File
uploadBtn.addEventListener('click', async () => {
    if(!selectedFile) {
        return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    uploadBtn.innerText = "Uploading...";
    uploadBtn.disabled = true;

    let res;
    try {
            const response = await fetch('http://localhost:5000/file/upload', {
            method: 'POST',
            body: formData
        });

        if(response.ok) {
            statusText.innerText = "✅ File uploaded successfully!";
        }
        else {
            statusText.innerText = "❌ Upload failed.";
        } res = response.ok;
    } catch(error) {
        statusText.innerText = "⚠️ Network error occurred";
    }

    uploadBtn.innerText = res ? "Uploaded" : "Try Again";
    uploadBtn.disabled = res;
});
