document.addEventListener("DOMContentLoaded", function () {
    var openModalButton = document.getElementById('openModal');
    var modalContainer = document.getElementById('modal-container');

    openModalButton.addEventListener('click', function () {
        showModal();
    });

    modalContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('close') || event.target === modalContainer) {
            closeModal();
        }
    });
});

function showModal() {
    var modalContainer = document.getElementById('modal-container');
    var modal = createModal(); // Create a new modal element
    modalContainer.appendChild(modal);
    // Create confetti elements
    var confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'absolute';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.pointerEvents = 'none'; // Ensure clicks go through confetti
    for (var i = 0; i < 50; i++) { // Create 50 confetti pieces
        var confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%'; // Random horizontal position
        confetti.style.animationDelay = Math.random() * 6 + 's'; // Random delay
        confettiContainer.appendChild(confetti);
    }
    modal.appendChild(confettiContainer);
}

function closeModal() {
    var modalContainer = document.getElementById('modal-container');
    var modal = document.getElementById('modal');
    var confettiContainer = modal.querySelector('div');
    modal.removeChild(confettiContainer);
    modal.remove();
}

function createModal() {
    var modal = document.createElement('div');
    modal.id = 'modal';
    modal.classList.add('modal');
    // Modal content
    var modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    var closeBtn = document.createElement('span');
    closeBtn.classList.add('close');
    closeBtn.textContent = '×';
    modalContent.appendChild(closeBtn);
    var h2 = document.createElement('h2');
    h2.textContent = '🎁 Surprise Gift Card 🎉';
    modalContent.appendChild(h2);
    var p = document.createElement('p');
    p.textContent = "Congratulations! You've received a special gift card. Enjoy!";
    modalContent.appendChild(p);
    modal.appendChild(modalContent);
    return modal;
}
