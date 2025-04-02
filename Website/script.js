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
    const images = document.getElementsByClassName('NightmodeImage');
    const listActive = document.querySelector('#List .active');
    const listItems = document.querySelectorAll('#List li a');
    const listItemsHover = document.querySelectorAll('#List li a:hover');
    const listItemsActive = document.querySelectorAll('#List li a .active');  

    if (body.style.color == 'white'){nightMode = true}

    // Light Settings
    if (nightMode == true)
    {
        document.querySelectorAll('.study-tips').forEach(element => {
            element.style.backgroundColor = 'white';
        });
        document.querySelectorAll('.container').forEach(element => {
            element.style.backgroundColor = 'white';
        });
        // Dark Mode Persistence
        nightMode = false;
        localStorage.setItem('NightmodeStatus', false);

        // Button CSS
        images[0].src = 'img/crescent-moon.ico'
        images[1].src = 'img/crescent-moon.ico' 
        button1.style.backgroundColor = 'navy'
        button2.style.backgroundColor = 'navy' 
        
        // Body CSS
        body.style.backgroundColor = 'var(--backgroundClrSideBars)';
        
        // Header CSS
        document.querySelector("header").style.backgroundColor = 'white'
        listActive.style.color = 'var(--hovercolor)';
        listItems.forEach(element => {
            element.style.color = 'black'
        });
        listItemsHover.forEach(element => {
            element.style.color = 'var(--hovercolor)';
            element.style.backgroundColor= 'white';
        });
        listItemsActive.forEach(element => {
            element.style.color = 'var(--hovercolor)';
            element.backgroundColor= 'rgba(227, 0, 70, 0.1)';
        });
        document.querySelector('.active').style.color= 'var(--hoverColor)';
        

        // Page Content CSS
        
            //Home
        document.querySelector('#welcome-message').style.backgroundColor = 'white';

            // Tips + Ontspanning
        document.querySelector('.study-tips').style.backgroundColor = 'blue';
    }

    // Dark Settings
    else if (nightMode == false) // All default CSS stuff is basically copy-pasted down here.
    {
        document.querySelectorAll('.study-tips').forEach(element => {
            element.style.backgroundColor = 'darkgrey';
        });
        document.querySelectorAll('.container').forEach(element => {
            element.style.backgroundColor = 'darkgrey';
        });
        // Dark Mode Persistence
        nightMode = true;
        localStorage.setItem('NightmodeStatus', true);
        // Button CSS
        images[0].src = 'img/sun.ico'
        images[1].src = 'img/sun.ico'
        button1.style.backgroundColor = 'lightblue'
        button2.style.backgroundColor = 'lightblue'
        
        // Body CSS
        body.style.backgroundColor = 'var(--backgroundClrSideBarsNight)';

        // Header CSS
        document.querySelector("header").style.backgroundColor = 'rgb(103, 79, 79)'

        listActive.style.color = 'var(--hovercolor)';
        listItems.forEach(element => {
            element.style.color = 'white'
        });
        listItemsHover.forEach(element => {
            element.style.color = 'var(--hovercolor)';
            element.style.backgroundColor= 'rgba(227, 0, 70, 0.1)';
        });
        listItemsActive.forEach(element => {
            element.style.color = 'var(--hovercolor)';
            element.style.backgroundColor= 'rgba(227, 0, 70, 0.1)';
        });
        document.querySelector('.active').style.color= 'var(--hoverColor)';
        document.querySelector('#menu-toggle').style.color = 'black';

        // Page Content CSS
        document.querySelector('#welcome-message').style.backgroundColor = 'darkgrey';
        document.querySelector('.study-tips').style.backgroundColor = 'blue';
        document.querySelector('.container').setProperty('background-color', 'red', 'important');
    }
} 

// Initialize all functionality when page loads
document.addEventListener('DOMContentLoaded', function() {
    actiefTab();
    displayRandomQuote();
    displayEncouragement();
    if (localStorage.getItem('NightmodeStatus') === 'true') toggleNightMode();
});