document.querySelector('.btn').addEventListener('click', function() {
    const projectName = document.getElementById('nameInput').value;
    document.getElementById('Proname').value = projectName;
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function() {
    const projectName = document.getElementById('nameInput').value;
    document.getElementById('Proname').value = projectName;
    uploadFile();
});

document.getElementById('fileInput').addEventListener('dblclick', function() {
    const projectName = document.getElementById('nameInput').value;
    document.getElementById('Proname').value = projectName;
    uploadFile();
});

function uploadFile() {
    const formData = new FormData(document.getElementById('fileForm'));
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload', true);

    xhr.onloadstart = function() {
        console.log('Upload started');
        document.getElementById('loadingScreen').style.opacity = 1;
        console.log(document.getElementById('loadingScreen'));
        document.getElementById('loadingScreen').style.pointerEvents = 'auto';
    };

    xhr.onload = function() {
        if (xhr.status === 200) {
            window.location.href = xhr.responseURL;
        } else {
            alert('Upload failed');
        }
        document.getElementById('loadingScreen').style.display = 'none';
    };

    xhr.onerror = function() {
        alert('Upload failed');
        document.getElementById('loadingScreen').style.display = 'none';
    };

    xhr.send(formData);
}