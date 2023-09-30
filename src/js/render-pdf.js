// script.js
document.addEventListener("DOMContentLoaded", function () {
    const showPdfButton = document.getElementById("fileViewer");
    const pdfViewer = document.getElementById("pdfViewer");

    showPdfButton.addEventListener("click", function () {
        // Replace 'your-pdf-file.pdf' with the actual URL of your PDF file
        const pdfFileUrl = 'docs/Sample.pdf';
        pdfViewer.src = pdfFileUrl;
        pdfViewer.style.display = 'block';
    });
});
