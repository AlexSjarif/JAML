// Highlight active tab in navigation
function actiefTab() {
    const links = document.querySelectorAll('#List a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    }); 
}

// Toggle mobile menu
function toggleMenu() {
    const list = document.getElementById('List');
    list.classList.toggle('active');
}

// Array of motivational quotes
const quotes = [
    "Discipline is de brug tussen doelen en prestatie.",
    "Elke expert was ooit een beginner.",
    "Succes is de optelsom van kleine inspanningen, elke dag herhaald.",
    "Kijk niet naar de klok; doe wat hij doet—blijf doorgaan.",
    "De pijn van studeren is tijdelijk, maar de trots van succes blijft voor altijd.",
    "Je hoeft niet perfect te zijn, alleen beter dan gisteren.",
    "Hoe meer je leert, hoe meer je verdient.",
    "Droom groot, werk hard, blijf gefocust en geef nooit op.",
    "Kennis is macht, maar actie is de sleutel.",
    "De enige plek waar succes vóór werk komt, is in het woordenboek."
];

// Array of encouragement phrases
const encouragements = [
    "Vandaag is jouw dag!",
    "Jij kunt dit!",
    "Elke stap telt!",
    "Blijf gaan!",
    "Succes begint hier!"
];

// Display random motivational quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById('motivational-quote');
    if (quoteElement) {
        quoteElement.textContent = quotes[randomIndex];
    }
}

// Display random encouragement phrase
function displayEncouragement() {
    const randomIndex = Math.floor(Math.random() * encouragements.length);
    const encouragementElement = document.getElementById('dynamic-encouragement');
    if (encouragementElement) {
        encouragementElement.textContent = encouragements[randomIndex];
    }
}

// Initialize all functionality when page loads
document.addEventListener('DOMContentLoaded', function() {
    actiefTab();
    toggleMenu();
    displayRandomQuote();
    displayEncouragement();
});