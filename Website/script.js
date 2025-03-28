// Highlight active tab in navigation
function actiefTab() {
    const links = document.querySelectorAll('#List li a');
    links.forEach(link => {
        // if a nav link is the same as the current URL, add the 'active' class to it.
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

// Toggle dark mode

let nightMode = false; // Default to light mode
function toggleNightMode()
{ 
    const body = document.querySelector("Body");
    const button1 = document.getElementById("NightmodeButtonOutsideList");
    const button2 = document.getElementById("NightmodeButtonInsideList");
    const buttons = [button1, button2];
    if (body.style.color == 'white'){nightMode = true}

    if (nightMode == true)
    {
        nightMode = false;
        localStorage.setItem('NightmodeStatus', false);
        var image = document.querySelector('.NightmodeImage')
        image.src = 'img/crescent-moon.ico'
        document.querySelector("header").style.backgroundColor = 'white'
        body.style.background = 'white';
        body.style.color = 'black'
        // document.getElementById('motivational-quote').style.color = 'black'

        // body.style.background = 'rgb(149, 149, 149)'
        // body.style.color = 'rgb(11, 11, 64)'
        // buttons.style.backgroundColor= 'rgb(16,16,92)'
        // buttons.style.borderColor = 'rgb(38, 195, 219)'
    }
    else if (nightMode == false) 
    {
        nightMode = true;
        localStorage.setItem('NightmodeStatus', true);
        var image = document.querySelector('.NightmodeImage')
        vars= document.querySelectorAll ('#welcome-message')

        image.src = 'img/sun.ico'
        document.querySelector("header").style.backgroundColor = 'rgb(65, 45, 45)'
        body.style.background = 'black'
        body.style.color = 'white'
        // document.getElementById('motivational-quote').style.color = 'white'
        document.querySelector('#List li').style.color = 'white'
        // buttons.style.backgroundColor = 'rgb(38, 195, 219)'
        // buttons.style.borderColor = 'rgb(16,16,92)'
    }
} 

// Initialize all functionality when page loads
document.addEventListener('DOMContentLoaded', function() {
    actiefTab();
    displayRandomQuote();
    displayEncouragement();
    if (localStorage.getItem('NightmodeStatus') === 'true') toggleNightMode();
});