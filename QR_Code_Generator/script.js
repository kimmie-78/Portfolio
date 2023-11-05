const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');
const colorSelect = document.getElementById('colorSelect');

generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generateQRCode();
});

function generateQRCode() {
    qrContainer.innerHTML = ""; // Clear any existing QR code.

    const size = sizes.value;
    const selectedColor = colorSelect.value;

    if (qrText.value.trim().length > 0) {
        new QRCode(qrContainer, {
            text: qrText.value,
            height: size,
            width: size,
            colorLight: selectedColor === 'white' ? '#fff' : '#000',
            colorDark: selectedColor === 'white' ? '#000' : selectedColor,
        });

    } else {
        alert("Please enter the text or URL to generate your QR code");
    }
}

downloadBtn.addEventListener('click', () => {
    let img = document.querySelector('.qr-body img');

    if (img !== null) {
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    } else {
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});
