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
const quotesNL = [
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
const encouragementsNL = [
    "Vandaag is jouw dag!",
    "Jij kunt dit!",
    "Elke stap telt!",
    "Blijf gaan!",
    "Succes begint hier!"
];

// Display random motivational quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotesNL.length);
    const quoteElement = document.getElementById('motivational-quote');
    if (quoteElement) {
        quoteElement.textContent = quotesNL[randomIndex];
    }
}

// Display random encouragement phrase
function displayEncouragement() {
    const randomIndex = Math.floor(Math.random() * encouragementsNL.length);
    const encouragementElement = document.getElementById('dynamic-encouragement');
    if (encouragementElement) {
        encouragementElement.textContent = encouragementsNL[randomIndex];
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
        document.querySelector("header").style.backgroundColor = 'rgb(81, 79, 103)'

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
    }
} 

function formConfirmation(){
    alert("Formulier is verzonden!")
} 

// Initialize all functionality when page loads
document.addEventListener('DOMContentLoaded', function() {
    actiefTab();
    displayRandomQuote();
    displayEncouragement();
    if (localStorage.getItem('NightmodeStatus') === 'true') toggleNightMode();
});























// --- WEEKAGENDA MET EUROPESE TIJDEN, KLEUREN EN VERWIJDEREN ---

const times = [];
for (let h = 0; h < 24; h++) {
  times.push((h < 10 ? "0" : "") + h + ":00");
}
const days = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];
let currentWeekStart = getMonday(new Date());
let events = JSON.parse(localStorage.getItem("calendarEvents") || "[]");

function getMonday(d) {
  d = new Date(d);
  let day = d.getDay(), diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  d.setHours(0,0,0,0);
  return d;
}

function renderWeek() {
  const timesCol = document.querySelector('.calendar-times');
  timesCol.innerHTML = "";
  times.forEach(t => {
  timesCol.innerHTML += `<div>${t}</div>`;
  });

  const grid = document.getElementById('calendarGrid');
  if (!grid) return;
  grid.innerHTML = "";
  for (let d = 0; d < 7; d++) {
    const dayCol = document.createElement('div');
    dayCol.className = "calendar-day-col";
    dayCol.style.position = "relative";
    for (let t = 0; t < times.length; t++) {
      const slot = document.createElement('div');
      slot.className = "calendar-slot";
      slot.dataset.day = d;
      slot.dataset.time = times[t];
      dayCol.appendChild(slot);
    }
    // Events
    const dayDate = new Date(currentWeekStart);
    dayDate.setDate(dayDate.getDate() + d);
    const dayEvents = events
      .map((ev, idx) => ({...ev, idx}))
      .filter(ev => {
        const evDate = new Date(ev.date);
        return evDate.toDateString() === dayDate.toDateString();
      });
    dayEvents.forEach(ev => {
      const startIdx = getTimeIndex(ev.start);
      const endIdx = getTimeIndex(ev.end);
      if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) return;
      const block = document.createElement('div');
      block.className = "event-block";
      block.style.top = (startIdx * 40) + "px";
      block.style.height = ((endIdx - startIdx) * 40) + "px";
      block.style.background = ev.color;
      block.innerText = ev.title + ` (${ev.start} - ${ev.end})`;
      block.title = ev.title + " " + ev.start + " - " + ev.end;
      block.onclick = function(e) {
        e.stopPropagation();
        if (confirm(`Verwijder "${ev.title}"?`)) {
          events.splice(ev.idx, 1);
          localStorage.setItem("calendarEvents", JSON.stringify(events));
          renderWeek();
        }
      };
      dayCol.appendChild(block);
    });
    grid.appendChild(dayCol);
  }
  const weekLabel = document.getElementById('weekLabel');
  const monday = new Date(currentWeekStart);
  const sunday = new Date(currentWeekStart); sunday.setDate(monday.getDate() + 6);
  weekLabel.textContent = `${monday.toLocaleDateString('nl-NL')} - ${sunday.toLocaleDateString('nl-NL')}`;
}

function getTimeIndex(timeStr) {
  const [h, m] = timeStr.split(":").map(Number);
  return h + (m >= 30 ? 1 : 0);
}

document.getElementById('prevWeek').onclick = () => {
  currentWeekStart.setDate(currentWeekStart.getDate() - 7);
  renderWeek();
};
document.getElementById('nextWeek').onclick = () => {
  currentWeekStart.setDate(currentWeekStart.getDate() + 7);
  renderWeek();
};

const modal = document.getElementById('eventModal');
document.getElementById('addEventBtn').onclick = () => { modal.style.display = "flex"; };
document.getElementById('closeModal').onclick = () => { modal.style.display = "none"; };
window.onclick = function(e) { if (e.target === modal) modal.style.display = "none"; };

document.getElementById('eventForm').onsubmit = function(e) {
  e.preventDefault();
  const title = document.getElementById('eventTitle').value;
  const color = document.getElementById('eventColor').value;
  const dayIdx = parseInt(document.getElementById('eventDay').value);
  const start = document.getElementById('eventStart').value;
  const end = document.getElementById('eventEnd').value;
  if (start >= end) return alert("Eindtijd moet na starttijd zijn!");
  const date = new Date(currentWeekStart);
  date.setDate(date.getDate() + dayIdx);
  events.push({ title, color, start, end, date: date.toISOString() });
  localStorage.setItem("calendarEvents", JSON.stringify(events));
  modal.style.display = "none";
  renderWeek();
  this.reset();
};

document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('calendarGrid')) renderWeek();
});