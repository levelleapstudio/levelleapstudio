// Load games data
function createGameCard(game) {
    return `
        <div class="game-card">
            <img src="${game.image}" alt="${game.title}">
            <div class="game-info">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <a href="${game.playStoreLink}" target="_blank" class="play-button">Play Now</a>
            </div>
        </div>
    `;
}

// Load featured games on homepage
function loadFeaturedGames() {
    const featuredGamesGrid = document.getElementById('featured-games-grid');
    if (featuredGamesGrid && typeof gamesData !== 'undefined') {
        const featuredGames = gamesData.filter(game => game.featured);
        featuredGamesGrid.innerHTML = featuredGames.map(game => createGameCard(game)).join('');
    }
}

// Load all games on games page
function loadAllGames() {
    const allGamesGrid = document.getElementById('all-games-grid');
    if (allGamesGrid && typeof gamesData !== 'undefined') {
        allGamesGrid.innerHTML = gamesData.map(game => createGameCard(game)).join('');
    }
}

// Load games when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Load the games data script first
    const script = document.createElement('script');
    script.src = 'games-data.js';
    script.onload = function() {
        loadFeaturedGames();
        loadAllGames();
    };
    document.head.appendChild(script);
});