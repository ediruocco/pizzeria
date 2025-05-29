// script.js

/**
 * Funzione per mostrare la categoria di pizza selezionata e aggiornare lo stato dei bottoni.
 * @param {string} categoryId - L'ID della sezione della categoria da mostrare.
 * @param {HTMLElement} clickedButton - Il bottone che è stato cliccato.
 */
function showCategory(categoryId, clickedButton) {
    // Nasconde tutte le sezioni di pizza rimuovendo la classe 'active-category'
    const sections = document.querySelectorAll('.pizza-category-section');
    sections.forEach(section => {
        section.classList.remove('active-category');
    });

    // Mostra la sezione desiderata aggiungendo la classe 'active-category'
    const activeSection = document.getElementById(categoryId);
    if (activeSection) {
        activeSection.classList.add('active-category');
    }

    // Rimuove la classe 'active' da tutti i bottoni di categoria
    const buttons = document.querySelectorAll('.category-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Aggiunge la classe 'active' al bottone che è stato cliccato
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}

/**
 * Funzione per aprire il modal e mostrare l'immagine ingrandita.
 * @param {string} imgSrc - L'URL dell'immagine da visualizzare nel modal.
 */
function openModal(imgSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");

    modal.style.display = "flex"; // Mostra il modal
    modalImg.src = imgSrc; // Imposta la sorgente dell'immagine nel modal
}

/**
 * Funzione per chiudere il modal.
 */
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Nasconde il modal
}


// Esegue il codice quando l'intera pagina è stata caricata
window.onload = function() {
    // Mostra la prima categoria di default all'avvio dell'applicazione.
    // Seleziona il bottone con la classe 'active' per inizializzare correttamente lo stato.
    showCategory('traditional-pizzas', document.querySelector('.category-button.active'));

    // Registra il Service Worker per abilitare le funzionalità PWA (Progressive Web App).
    // Questo permette all'applicazione di funzionare offline e di essere "installabile".
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    }
};
