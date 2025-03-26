
function actiefTab() {
    const links = document.querySelectorAll('#List a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    }); 
}

function toggleMenu() {
    const list = document.getElementById('List');
    list.classList.toggle('active');
}


function displayRandomQuote() {
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

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById('motivational-quote');
    
    if (quoteElement) {
        quoteElement.textContent = quotes[randomIndex];
    }
}


document.addEventListener('DOMContentLoaded', function() {
    actiefTab();
    toggleMenu(); // Keep your existing menu functionality
    displayRandomQuote(); 
});