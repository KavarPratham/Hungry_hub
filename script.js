// Function to copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('Link copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}

const currentPageUrl = window.location.href;
document.getElementById('shareBtn').addEventListener('click', function() {
    copyToClipboard(currentPageUrl);
});