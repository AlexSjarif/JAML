function actiefTab()
{
    const links = document.querySelectorAll('#Nav a');
    links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
}); 
}
function toggleMenu() {
    const list = document.getElementById('List');
    list.classList.toggle('active'); // Voeg de active klasse toe of verwijder deze
}

actiefTab();
