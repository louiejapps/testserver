const openModalButton = document.getElementById('openModal');
const animate = document.getElementById('openModal');
const contain = document.getElementById('container');
const saying = document.getElementById('saying');
const greet = document.getElementById('great');
const bdayimage = document.getElementById('bday-image');

openModalButton.addEventListener('click', function () {
    showModal();
    aline();
});

function showModal() {
    contain.style.display = "none";
    var modal = document.createElement('div');

    modal.innerHTML = `
    <div class="modal-content">
        <center id="greet1">
            <h3 id="line1" style="font-family: cursive; opacity: 0;color:crimson">My Dear Eunice,</h3>
            <p id="line2" style="opacity: 0;">You are very kind, charming, and beautiful!</p>
            <p id="line3" style="opacity: 0;">I hope I can bring a little shine to your special day!</p>
            <span id="line4" style="opacity: 0; font-size: 100px; cursor:pointer" disabled>🎁</span>
        </center>

        <center id="greet2" style="display:none;">
        <img id="img1" src="${imageLC}" style="opacity: 0;height:150px;margin:15px" alt="Birthday Image">
        
        <br>
        <span class="spoiler" id="spoiler1"><span style="opacity:0;">4180894545488991863</span></span>
        <br><br>
        <span class="spoiler" id="spoiler2"><span style="opacity:0;">4180353458988991863</span></span>
        <br><br>
        <span class="spoiler" id="spoiler3"><span style="opacity:0;">4183454408988991863</span></span>
        <br><br>
        <span id="continue" style="display:none; opacity:0;  cursor:pointer">Please Continue</span>
        <br>
        </center>
    </div>
    <span class="close-button">&times;</span>
`;

    // Add fade-in animation to each line

    modal.style.position = 'fixed';
    modal.style.top = '40%';
    modal.style.left = '50%';
    modal.style.height = 'auto';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    modal.style.padding = '20px';
    modal.style.border = 'none';
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
    const spoiler1 = modal.querySelector('#spoiler1');
    const spoiler2 = modal.querySelector("#spoiler2");
    const spoiler3 = modal.querySelector("#spoiler3");

    const contin = modal.querySelector("#continue");

    spoiler1.addEventListener('click', function () {
        setTimeout(function () {
            spoiler1.style.backgroundColor = `transparent`;
            spoiler1.innerHTML = `98108693792893`;

            spoiler1.style.fontSize = `20px`;
            setTimeout(function () {
                spoiler2.style.fontSize = `16px`;
                spoiler3.style.fontSize = `16px`;
            }, 300);
        }, 500);

    });

    spoiler2.addEventListener('click', function () {
        setTimeout(function () {
            spoiler2.style.backgroundColor = `transparent`;
            spoiler2.innerHTML = `41808988991863`;
            spoiler2.style.fontSize = `20px`;
            setTimeout(function () {
                spoiler1.style.fontSize = `16px`;
                spoiler3.style.fontSize = `16px`;
            }, 300);
        }, 500);

    });

    spoiler3.addEventListener('click', function () {
        setTimeout(function () {
            spoiler3.style.backgroundColor = `transparent`;
            spoiler3.innerHTML = `12008799642781`;
            spoiler3.style.fontSize = `20px`;
            setTimeout(function () {
                spoiler1.style.fontSize = `16px`;
                spoiler2.style.fontSize = `16px`;
            }, 300);
        }, 500);
    });

    contin.addEventListener('click', function () {
        setTimeout(function () {
            modal.remove();
            overlay.remove();
            saying.innerHTML = "Hoping to meet you in person soon.";
            greet.innerHTML = "Happy Birthday Eunice!";
            bdayimage.src = imagegirl;

            contain.style.display = `block`;
            setTimeout(function () {
                clearTimeouts(confettiTimeouts); // Clear timeouts when closing the modal

                stopAnimation();
            }, 2500);
        }, 1000);



    });



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
        setTimeout(function () {
            greet1.style.display = `none`;
            greet2.style.display = `block`;
            animateLine('img1', 100); // Adjust the delay for each line as needed
            animateLine('spoiler1', 1600); // Adjust the delay for each line as needed
            animateLine('spoiler2', 1300); // Adjust the delay for each line as needed
            animateLine('spoiler3', 1000); // Adjust the delay for each line as needed 
            animateLine('continue', 3000); // Adjust the delay for each line as needed
            contin.style.display = `block`;
        }, 1000);

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
        background-color: rgba(0, 0, 0, 0.3f5);
        z-index: 9998;
    `;

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

function revealSpoiler(spoilers) {

    for (var i = 0; i < spoilers.length; i++) {
        spoilers[i].removeAttribute("id");
    }
}

function playAnimation() {
    animate.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        animate.style.animation = 'none'; // Pause the animation
        setTimeout(() => {
            animate.style.animation = 'shake 0.5s ease-in-out'; // Play the animation again after pause
        }, 1000); // Pause for 2 seconds
    }, 1000); // Duration of the animation (0.5 seconds)
}

// Start the animation initially
playAnimation();

// Repeat the animation with delays
setInterval(playAnimation, 500); // Repeat the animation every 3.5 seconds (0.5s animation + 2s pause)

function stopAnimation() {
    animate.style.animation = 'none';
}

const aline = () => {
    animateLine('line1', 300); // Adjust the delay for each line as needed
    animateLine('line2', 1000);
    animateLine('line3', 2000);
    animateLine('line4', 3000);
}

function animateLine(lineId, delay) {
    setTimeout(() => {
        var line = document.getElementById(lineId);
        line.style.transition = 'opacity 1s ease-in-out';
        line.style.opacity = '1';
    }, delay);
}