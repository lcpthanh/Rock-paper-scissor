// Get DOM elements
const bgSelect = document.getElementById('bg-color');
const volumeInput = document.getElementById('volume');

// Load current settings


// Load sound volume
const volume = localStorage.getItem('volume');
if (volume) {
    volumeInput.value = volume;
}

// Save settings on change


volumeInput.addEventListener('change', function () {
    const volume = volumeInput.value;
    localStorage.setItem('volume', volume);
});
