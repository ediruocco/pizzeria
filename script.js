// script.js

/**
 * Funzione per mostrare la categoria di pizza selezionata e aggiornare lo stato dei bottoni.
 * @param {string} categoryId - L'ID della sezione della categoria da mostrare.
 * @param {HTMLElement} clickedButton - Il bottone che è stato cliccato.
 */
function showCategory(categoryId, clickedButton) {
    // Nasconde tutte le sezioni di pizza rimuovendo la classe 'active-category'
    const sections = document.querySelectorAll('.pizza-category-section'); // Seleziona tutti gli elementi con la classe 'pizza-category-section'
    sections.forEach(section => { // Itera su ogni sezione trovata
        section.classList.remove('active-category'); // Rimuove la classe 'active-category' per nasconderla
    });

    // Mostra la sezione desiderata aggiungendo la classe 'active-category'
    const activeSection = document.getElementById(categoryId); // Ottiene la sezione specifica tramite il suo ID
    if (activeSection) { // Controlla se la sezione esiste
        activeSection.classList.add('active-category'); // Aggiunge la classe 'active-category' per renderla visibile
    }

    // Rimuove la classe 'active' da tutti i bottoni di categoria
    const buttons = document.querySelectorAll('.category-button'); // Seleziona tutti gli elementi con la classe 'category-button'
    buttons.forEach(button => { // Itera su ogni bottone trovato
        button.classList.remove('active'); // Rimuove la classe 'active' per disattivarli visivamente
    });

    // Aggiunge la classe 'active' al bottone che è stato cliccato
    if (clickedButton) { // Controlla se un bottone è stato effettivamente cliccato
        clickedButton.classList.add('active'); // Aggiunge la classe 'active' al bottone cliccato per evidenziarlo
    }
}

/**
 * Funzione per aprire il modal e mostrare l'immagine ingrandita.
 * @param {string} imgSrc - L'URL dell'immagine da visualizzare nel modal.
 */
function openModal(imgSrc) {
    const modal = document.getElementById("imageModal"); // Ottiene l'elemento del modal tramite il suo ID
    const modalImg = document.getElementById("img01"); // Ottiene l'elemento immagine all'interno del modal

    modal.style.display = "flex"; // Mostra il modal impostando la sua proprietà display a 'flex'
    modalImg.src = imgSrc; // Imposta la sorgente (URL) dell'immagine all'interno del modal
}

/**
 * Funzione per chiudere il modal.
 */
function closeModal() {
    const modal = document.getElementById("imageModal"); // Ottiene l'elemento del modal
    modal.style.display = "none"; // Nasconde il modal impostando la sua proprietà display a 'none'
}


// Esegue il codice quando l'intera pagina è stata caricata
window.onload = function() { // Funzione eseguita quando il DOM è completamente caricato
    // Mostra la prima categoria di default all'avvio dell'applicazione.
    // Seleziona il bottone con la classe 'active' per inizializzare correttamente lo stato.
    showCategory('traditional-pizzas', document.querySelector('.category-button.active')); // Chiama showCategory per la categoria predefinita

    // Registra il Service Worker per abilitare le funzionalità PWA (Progressive Web App).
    // Questo permette all'applicazione di funzionare offline e di essere "installabile".
    if ('serviceWorker' in navigator) { // Controlla se il browser supporta i Service Worker
        navigator.serviceWorker.register('./service-worker.js') // Registra il file service-worker.js
            .then(registration => { // Gestisce il successo della registrazione
                console.log('ServiceWorker registration successful with scope: ', registration.scope); // Logga il successo e lo scope del Service Worker
            })
            .catch(err => { // Gestisce eventuali errori durante la registrazione
                console.log('ServiceWorker registration failed: ', err); // Logga l'errore in caso di fallimento
            });
    }
};
