document.addEventListener('DOMContentLoaded', function() {
    const iconOverlays = document.querySelectorAll('.icon-overlay');
    const popupModal = document.getElementById('popup-modal');
    const popupContent = document.querySelector('.popup-detail');
    const popupClose = document.querySelector('.popup-close');

    iconOverlays.forEach(icon => {
        icon.addEventListener('click', function() {
            const part = this.getAttribute('data-part');
            const content = document.querySelector(`#hidden-info #${part}-info`);

            if (content) {
                popupContent.innerHTML = content.innerHTML;
                popupModal.style.display = 'block';
            }
        });
    });

    popupClose.addEventListener('click', function() {
        popupModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popupModal) {
            popupModal.style.display = 'none';
        }
    });
});
