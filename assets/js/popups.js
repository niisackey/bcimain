window.addEventListener('load', function() {
    var popupOverlay = document.getElementById('popupt-overlay');
    var closeButton = document.getElementById('close-popupt');

    closeButton.addEventListener('click', function() {
        popupOverlay.style.display = 'none';
    });
});