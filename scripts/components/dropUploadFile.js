const listFieldFileUpload = document.querySelectorAll('.field-upload-file');
const btnRemoveFileUpload = `<a href="#" class="remove"><i class="icon-close"></i></a>`;
if(listFieldFileUpload) {
    listFieldFileUpload.forEach(fieldFileUpload => {
        // upload file by button
        const inputFile = fieldFileUpload.querySelector('input[type="file"]');
        inputFile.addEventListener('change', e => {
            e.preventDefault();
            const textFileName = inputFile.parentElement.nextElementSibling;
            textFileName.innerHTML = e.target.files[0].name + btnRemoveFileUpload;
            textFileName.querySelector('a.remove').addEventListener('click', e => {
                e.preventDefault();
                inputFile.value = null;
                textFileName.innerHTML = '';
            });
        });

        // upload file by drop
        fieldFileUpload.addEventListener('dragenter', preventDefault, false);
        fieldFileUpload.addEventListener('dragleave', preventDefault, false);
        fieldFileUpload.addEventListener('dragover', preventDefault, false);
        fieldFileUpload.addEventListener('drop', preventDefault, false);
        fieldFileUpload.addEventListener('drop', handleDrop, false);
    });
}

function preventDefault(e) {
    e.preventDefault();
    e.stopPropagation();
}

function handleDrop(e) {
    const fieldFileUpload = e.target;
    const textFileName = fieldFileUpload.querySelector('p.file');
    const dt = e.dataTransfer;
    const files = dt.files;

    if (files.length) {
        textFileName.innerHTML= files[0].name + btnRemoveFileUpload;
        textFileName.querySelector('a.remove').addEventListener('click', e => {
            e.preventDefault();
            fieldFileUpload.querySelector('input[type="file"]').value = null;
            textFileName.innerHTML = '';
        });
    }
}
