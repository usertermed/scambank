// Common fake bank script
function showFakeAlert(message) {
    alert("🪝 " + message + "\n\nThis is a scambait demo - nothing real happened!");
}

// Login simulation
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const user = document.getElementById('username').value || 'ScamVictim';
            showFakeAlert(`Welcome back, ${user}! Your session is completely fake.`);
            // In a real multi-page setup you could use window.location = 'dashboard.html';
        });
    }
});

// Fake balance generator
function getRandomBalance() {
    return '$' + (Math.floor(Math.random() * 500000) + 2500).toLocaleString() + '.' + Math.floor(Math.random()*99);
}