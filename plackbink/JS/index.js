export const createRoot = () => {
    const div = document.createElement('div');
    div.className = 'container';
    div.id = 'listlink';
    div.innerHTML = /*html*/`
    <div class="container">
    <div class="header">
        PLΛƆKBIИK
        <span class="theme-toggle" onclick="toggleTheme()"><i class="fas fa-sun"></i></span>
    </div>
    <div id='nav'>
        <!-- Nav.js -->
    </div>

    <div id='post'>
    <p class="loading-message">Loading...</p>
    </div>    

    <div id="quoteList">
    </div>
</div>
    `
    return div;
};
