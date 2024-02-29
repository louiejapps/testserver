
var openModalButton = document.getElementById('openModal');

openModalButton.addEventListener('click', function () {
    showModal();
});

function showModal() {
    var modal = document.createElement('div');

    modal.innerHTML = `
    <div class="modal-content">
        <center id="greet1">
            <h3 id="line1" style="font-family: Arial, Helvetica, sans-serif; opacity: 0;color:crimson">Happy Birthday Eunice 🎉</h3>
            <p id="line2" style="opacity: 0;">You are very kind, charming, and beautiful!</p>
            <p id="line3" style="opacity: 0;">I hope I can bring a little shine to your special day!</p>
            <span id="line4" style="opacity: 0; font-size: 100px; cursor:pointer">🎁</span>
        </center>

        <center id="greet2" style="display:none;">
        <img src="smartlc.png" style="height:150px;margin:15px" alt="Birthday Image">
        <p class="spoiler" onclick="revealSpoiler()" style="font-family: Arial, Helvetica, sans-serif;margin:10px;user-select: auto;color:#ff69b4">3463634</p>
        <p class="spoiler" onclick="revealSpoiler()" style="font-family: Arial, Helvetica, sans-serif;margin:10px;user-select: auto;color:#ff69b4">3463634</p>
        </center>
    </div>
    <span class="close-button">&times;</span>
`;

    // Add fade-in animation to each line
    animateLine('line1', 500); // Adjust the delay for each line as needed
    animateLine('line2', 1500);
    animateLine('line3', 3000);
    animateLine('line4', 5000);

    function animateLine(lineId, delay) {
        setTimeout(() => {
            var line = document.getElementById(lineId);
            line.style.transition = 'opacity 1s ease-in-out';
            line.style.opacity = '1';
        }, delay);
    }


    modal.style.position = 'fixed';
    modal.style.top = '40%';
    modal.style.left = '50%';
    modal.style.height = 'auto';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = 'white';
    modal.style.padding = '20px';
    modal.style.border = '1px solid #aaa';
    modal.style.borderRadius = '10px';
    modal.style.zIndex = '9999';

    // Define minimum width in pixels
    const minWidth = 330; // Adjust this value as needed

    // Check if the viewport is in landscape or portrait mode
    if (window.matchMedia("(orientation: landscape)").matches) {
        // Landscape mode (desktop)
        modal.style.width = `450px`;
    } else {
        // Portrait mode (mobile devices)
        modal.style.width = `80%`;
    }

    var greet1 = modal.querySelector('#greet1');
    greet1.style.cssText = `
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    `;

    var greet2 = modal.querySelector('#greet2');

    var giftButton = modal.querySelector('#line4');
    giftButton.addEventListener('click', function () {
        greet1.style.display = `none`;
        greet2.style.display = `block`;
    });

    var closeButton = modal.querySelector('.close-button');
    closeButton.style.cssText = `
        position: absolute;
        top: -10px;
        right: -10px;
        font-size: 24px;
        cursor: pointer;
        background: transparent;
        display: none;
    `;

    closeButton.addEventListener('click', function () {
        modal.remove();
        overlay.remove();
        clearTimeouts(confettiTimeouts); // Clear timeouts when closing the modal
    });

    var overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.25);
        z-index: 9998;
    `;

    overlay.addEventListener('dblclick', function () {
        modal.remove();
        overlay.remove();
        clearTimeouts(confettiTimeouts); // Clear timeouts when closing the modal
    });

    // Add modal and overlay to the page
    document.body.appendChild(modal);
    document.body.appendChild(overlay);

    // Trigger confetti effect
    var confettiTimeouts = [];
    for (let i = 0; i < 200; i++) {
        confettiTimeouts.push(setTimeout(function () {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, i * 1000)); // Adjust the delay (in milliseconds) between each trigger
    }
}

function clearTimeouts(timeouts) {
    timeouts.forEach(timeout => clearTimeout(timeout));
}

function revealSpoiler() {
    var spoilers = document.getElementsByClassName("spoiler");
    for (var i = 0; i < spoilers.length; i++) {
        spoilers[i].classList.remove("spoiler"); // Remove spoiler class
    }
}
